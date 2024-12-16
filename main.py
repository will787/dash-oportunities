import streamlit as st
import pandas as pd
import datetime
import yfinance as yf
import numpy as np
import plotly.express as px
from streamlit_extras.metric_cards import style_metric_cards
from streamlit_extras.grid import grid


def build_sidebar():
    st.sidebar.header('Opções')
    st.sidebar.write('Selecione uma ação ou várias ações')
    
    # Use the same path defined in search_action.py
    ticker_list = pd.read_csv('/home/wvmwill/enviroment/dash-oportunities/tickers_ibra.csv', index_col=0)
    tickers = st.sidebar.multiselect(label='Selecione as ações', options=ticker_list)
    tickers = [t+'.SA' for t in tickers]
    
    today = datetime.date.today() - datetime.timedelta(days=3)
    yesterday = datetime.date.today() - datetime.timedelta(days=60)
    
    start_date = st.sidebar.date_input('De', value=pd.to_datetime(yesterday))
    end_date = st.sidebar.date_input('Até', value=pd.to_datetime(today))

    if tickers:
        prices = yf.download(tickers, start=start_date, end=end_date)['Adj Close']
        if isinstance(prices, pd.Series):
            prices = pd.DataFrame(prices)
        prices.columns = prices.columns.str.replace('.SA', '')
        return tickers, prices
    return [], pd.DataFrame()

def build_main(tickers, prices):
    if not tickers:
        st.warning("Please select stocks to analyze")
        return
        
    weights = np.ones(len(tickers)) / len(tickers)
    prices['portfolio'] = prices @ weights
    norm_prices = 100 * prices / prices.iloc[0]
    returns = prices.pct_change()[1:]
    vols = returns.std() * np.sqrt(252)
    rets = (norm_prices.iloc[-1] - 100) / 100
    
    mygrid = grid(5, 5, 5, 5, 5, 5, vertical_align='top')
    
    for t in prices.columns:
        c = mygrid.container(border=True)
        c.subheader(t, divider='red')
        colA, colB, colC = c.columns(3)
        
        if t == 'portfolio':
            colA.image('/home/wvmwill/enviroment/dash-oportunities/image-portfolio.jpg', width=85)
        else:
            colA.image(f'https://raw.githubusercontent.com/thefintz/icones-b3/main/icones/{t}.png', width=85)
            
        colB.metric(label='retorno', value=f"{rets[t]:.0%}")
        colC.metric(label='volatilidade', value=f'{vols[t]:.0%}')
    
    st.dataframe(prices, width=1000)


st.set_page_config(layout='wide')

with st.sidebar:
    tickers, prices = build_sidebar()


st.title('Python direcionado em Finanças')
build_main(tickers, prices)
