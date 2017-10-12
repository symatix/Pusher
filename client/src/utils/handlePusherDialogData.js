import config from '../config';

const handlePusherDialogData = (data) => {
    const { orders, activeCity, money } = data;

    if (orders === null){
        return orders;
    }
    const { crew, doThis, allocate } = orders;

    // starting with default values - hire
    let member = doThis === "recruit" ? 1 : 0;
    let price = config[crew].expense;
    let cost = config[crew].recruit;
    let crewStrength = config[crew].enemy
    let configPriceDrop = config[crew].priceDrop;
    // than change if kill
    if (doThis === "dispose"){
            member = member === 0 ? -1 : - member;
            price = - price;
            cost = config[crew].dispose;
            crewStrength = - crewStrength;
            configPriceDrop = - configPriceDrop;

    }
    
    // handling data for the active city reducer - default COPS
    let affect = "gangs";
    let priceDrop = activeCity.priceDrop + configPriceDrop;
    const owned = activeCity[crew].owned + member;
    const drug = allocate;
    const enemy = owned -drug;
    // handling data for money reducer (for bribe, if )
    let expense = "bribe";
    let dailyCost = money.bribe + price;
    let affectVal = activeCity[affect] - crewStrength;
    const cash = money.cash - cost;

    // change if THUGS
    if (crew === "thugs"){
        affect = "raids";
        expense = "salary";
        dailyCost = money.salary + (owned * config[crew].expense);
        affectVal = activeCity[affect] - crewStrength;
    }

    // create object for action creators
    const newStats = {
        activeCity:{
            [crew]:{ owned, enemy, drug },
            [affect]:affectVal,
            priceDrop,
        },
        money:{
            [expense]:dailyCost,
            cash,
        },
    }
    return newStats;
}

export default handlePusherDialogData;
