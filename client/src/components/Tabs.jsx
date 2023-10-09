import { useDispatch } from 'react-redux';
import { toggleTab } from "../redux/actions";
import React from 'react';

const Tabs = ({ currentTab }) => {
    const TABS=["All Todos","Active Todos","Done Todos"]
    const dispatch = useDispatch();

    const onclicked=(tab)=>{
        dispatch(toggleTab(tab))
    }
    return (
        TABS.map(tab => (
            <button
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => onclicked(tab)}
            > {tab}
               
            </button>
        ))
    )
}

export default Tabs;