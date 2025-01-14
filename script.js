
const spc1 = document.getElementById('go');
const spc2 = document.querySelector('#botProps').children[8];
const spc3 = document.querySelector('#botProps').children[7];
const spc4 = document.querySelector('#botProps').children[6];
const spc5 = document.querySelector('#botProps').children[5];
const spc6 = document.querySelector('#botProps').children[4];
const spc7 = document.querySelector('#botProps').children[3];
const spc8 = document.querySelector('#botProps').children[2];
const spc9 = document.querySelector('#botProps').children[1];
const spc10 = document.querySelector('#botProps').children[0];
const spc11 = document.getElementById('jail');
const spc12 = document.querySelector('#leftProps').children[8];
const spc13 = document.querySelector('#leftProps').children[7];
const spc14 = document.querySelector('#leftProps').children[6];
const spc15 = document.querySelector('#leftProps').children[5];
const spc16 = document.querySelector('#leftProps').children[4];
const spc17 = document.querySelector('#leftProps').children[3];
const spc18 = document.querySelector('#leftProps').children[2];
const spc19 = document.querySelector('#leftProps').children[1];
const spc20 = document.querySelector('#leftProps').children[0];
const spc21 = document.getElementById('freePark');
const spc22 = document.querySelector('#topProps').children[0];
const spc23 = document.querySelector('#topProps').children[1];
const spc24 = document.querySelector('#topProps').children[2];
const spc25 = document.querySelector('#topProps').children[3];
const spc26 = document.querySelector('#topProps').children[4];
const spc27 = document.querySelector('#topProps').children[5];
const spc28 = document.querySelector('#topProps').children[6];
const spc29 = document.querySelector('#topProps').children[7];
const spc30 = document.querySelector('#topProps').children[8];
const spc31 = document.getElementById('goJail');
const spc32 = document.querySelector('#rightProps').children[0];
const spc33 = document.querySelector('#rightProps').children[1];
const spc34 = document.querySelector('#rightProps').children[2];
const spc35 = document.querySelector('#rightProps').children[3];
const spc36 = document.querySelector('#rightProps').children[4];
const spc37 = document.querySelector('#rightProps').children[5];
const spc38 = document.querySelector('#rightProps').children[6];
const spc39 = document.querySelector('#rightProps').children[7];
const spc40 = document.querySelector('#rightProps').children[8];
let spacesArr = [
  spc1,
  spc2,
  spc3,
  spc4,
  spc5,
  spc6,
  spc7,
  spc8,
  spc9,
  spc10,
  spc11,
  spc12,
  spc13,
  spc14,
  spc15,
  spc16,
  spc17,
  spc18,
  spc19,
  spc20,
  spc21,
  spc22,
  spc23,
  spc24,
  spc25,
  spc26,
  spc27,
  spc28,
  spc29,
  spc30,
  spc31,
  spc32,
  spc33,
  spc34,
  spc35,
  spc36,
  spc37,
  spc38,
  spc39,
  spc40
];

const ply1HandDisp = document.getElementById('ply1HandDisp');
const ply2HandDisp = document.getElementById('ply2HandDisp');
const ply2BankDisp = document.getElementById('ply2BankDisp');
const ply1BankDisp = document.getElementById('ply1BankDisp');
const ply1ValDisp = document.getElementById('ply1ValDisp');
const ply2ValDisp = document.getElementById('ply2ValDisp');
const ply3HandDisp = document.getElementById('ply3HandDisp');
const ply4HandDisp = document.getElementById('ply4HandDisp');
const ply3BankDisp = document.getElementById('ply3BankDisp');
const ply4BankDisp = document.getElementById('ply4BankDisp');
const ply3ValDisp = document.getElementById('ply3ValDisp');
const ply4ValDisp = document.getElementById('ply4ValDisp');

const notBox = document.getElementById('noticeBox');
const notMsg = document.getElementById('noticeMessage');

const token1 = document.getElementById('token1');
const token2 = document.getElementById('token2');
const token3 = document.getElementById('token3'); 
const token4 = document.getElementById('token4'); 


const ply1NameBtn = document.getElementById('ply1SubName');
let p1NameInput = document.getElementById('ply1Input').value;

const ply2NameBtn = document.getElementById('ply2SubName');
let p2NameInput = document.getElementById('ply2Input').value;

const ply3NameBtn = document.getElementById('ply3SubName');
let p3NameInput = document.getElementById('ply3Input').value;

const ply4NameBtn = document.getElementById('ply4SubName');
let p4NameInput = document.getElementById('ply4Input').value;

class player {
  constructor(tokenNum, persName, color) {
    this.persName = persName;
    this.token = tokenNum;
    this.curPos = 0;
    this.bankAcc = 1500;
    this.propsOwned = [];
    this.propsOwnedSpcs = [];
    this.propsOwnedObjs = [];
    this.totPropsVal = 0;
    this.totVal = 1500;
    this.color = color;
    this.jailCount = 0;
    this.doublesCount = 0;
  }
}
let p1 = new player(token1, 'Player1', '#3559E4');
let p2 = new player(token2, 'Player2', '#FD4B46');
let p3 = new player(token3, 'Player3', '#46FD4B'); 
let p4 = new player(token4, 'Player4', '#FD46B7');

class colProperty {
  constructor(name, cost, spaceNum, houseCost) {
    this.name = name;
    this.cost = cost;
    this.rent = Math.ceil(this.cost / 13);
    this.spc = spacesArr[spaceNum];
    this.spcNum = spaceNum;
    this.isOwned = false;
    this.houseCost = houseCost;
    this.curHouses = 0;
    this.owner = null;
    this.isMort = false;
    this.type = 'color';
  }
}
let medit = new colProperty('Mediteranean Avenue', 60, 1, 50);
let baltic = new colProperty('Baltic Avenue', 60, 3, 50);
let oriental = new colProperty('Oriental Avenue', 100, 6, 50);
let vermont = new colProperty('Vermont Avenue', 100, 8, 50);
let connet = new colProperty('Conneticut Avenue', 120, 9, 50);
let stChar = new colProperty('St. Charles Place', 140, 11, 100);
let states = new colProperty('States Avenue', 140, 13, 100);
let virg = new colProperty('Virginia Avenue', 160, 14, 100);
let stJam = new colProperty('St. James Place', 180, 16, 100);
let tenn = new colProperty('Tennessee Avenue', 180, 18, 100);
let newY = new colProperty('New York Avenue', 200, 19, 100);
let kent = new colProperty('Kentucky Avenue', 220, 21, 150);
let indiana = new colProperty('Indiana Avenue', 220, 23, 150);
let illi = new colProperty('Illinois Avenue', 240, 24, 150);
let atl = new colProperty('Atlantic Avenue', 260, 26, 150);
let vent = new colProperty('Ventor Avenue', 260, 27, 150);
let marv = new colProperty('Marvin Gardens', 280, 29, 150);
let pac = new colProperty('Pacific Avenue', 300, 31, 200);
let norC = new colProperty('North Carolina Avenue', 300, 32, 200);
let penn = new colProperty('Pennsylvania Avenue', 320, 34, 200);
let park = new colProperty('Park Place', 350, 37, 200);
let boardW = new colProperty('Boardwalk', 400, 39, 200);

class rrProperty {
  constructor(name, spaceNum) {
    this.name = name;
    this.cost = 200;
    this.rent = 100;
    this.spc = spacesArr[spaceNum];
    this.spcNum = spaceNum;
    this.isOwned = false;
    this.owner = null;
    this.isMort = false;
    this.type = 'nonColor';
  }
}
let readR = new rrProperty('Reading Railroad', 5);
let pennR = new rrProperty('Pennsylvania Railroad', 15);
let boR = new rrProperty('B. & O. Railroad', 25);
let shortR = new rrProperty('Short Line Railroad', 35);

class utilProperty {
  constructor(name, spaceNum) {
    this.name = name;
    this.cost = 150;
    this.rent = 50;
    this.spc = spacesArr[spaceNum];
    this.spcNum = spaceNum;
    this.isOwned = false;
    this.owner = null;
    this.isMort = false;
    this.type = 'nonColor';
  }
}
let elec = new utilProperty('Electric Company', 12);
let water = new utilProperty('Water Works', 28);

let propsArr = [
  'go',
  medit,
  'CC',
  baltic,
  'IT',
  readR,
  oriental,
  'chance',
  vermont,
  connet,
  'jail',
  stChar,
  elec,
  states,
  virg,
  pennR,
  stJam,
  'CC',
  tenn,
  newY,
  'Free Parking',
  kent,
  'chance',
  indiana,
  illi,
  boR,
  atl,
  vent,
  water,
  marv,
  'goJail',
  pac,
  norC,
  'CC',
  penn,
  shortR,
  'chance',
  park,
  'LT',
  boardW
]; 



const rollBtn1 = document.querySelector('#rollBtn1');
const rollBtn2 = document.querySelector('#rollBtn2');
const rollBtn3 = document.querySelector('#rollBtn3'); 
const rollBtn4 = document.querySelector('#rollBtn4'); 
const clearCardBtn = document.querySelector('#clearCardBtn');
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
rollBtn2.style.opacity = 0;
yesBtn.style.opacity = 0;
noBtn.style.opacity = 0;



const p1MortBtn = document.querySelector('#p1MortBtn');
const p2MortBtn = document.querySelector('#p2MortBtn');
const p3MortBtn = document.querySelector('#p3MortBtn'); 
const p4MortBtn = document.querySelector('#p4MortBtn'); 


const p1UnMortBtn = document.querySelector('#p1UnMortBtn');
const p2UnMortBtn = document.querySelector('#p2UnMortBtn');
const p3UnMortBtn = document.querySelector('#p3UnMortBtn'); 
const p4UnMortBtn = document.querySelector('#p4UnMortBtn'); 


const p2BuyHouseBtn = document.querySelector('#p2BuyHouseBtn');
const p1BuyHouseBtn = document.querySelector('#p1BuyHouseBtn');
const p3BuyHouseBtn = document.querySelector('#p3BuyHouseBtn'); 
const p4BuyHouseBtn = document.querySelector('#p4BuyHouseBtn'); 

const d1Disp = document.querySelector('#firstDice');
const d2Disp = document.querySelector('#secDice');

let freeParkPot = 0;

let rollDoubles = false;

let currentPly = 'p1';

let mortActive = false;
let unMortActive = false;
let buyHouseActive = false;


p2MortBtn.style.opacity = 0;
p3MortBtn.style.opacity = 0;
p4MortBtn.style.opacity = 0;
p2UnMortBtn.style.opacity = 0;
p3UnMortBtn.style.opacity = 0;
p4UnMortBtn.style.opacity = 0;
p2BuyHouseBtn.style.opacity = 0;
p3BuyHouseBtn.style.opacity = 0;
p4BuyHouseBtn.style.opacity = 0;


dispMoney = (ply) => {
  
  if (ply === p1) {
    ply1BankDisp.innerText = p1.bankAcc;
  } else if (ply === p2) {
    ply2BankDisp.innerText = p2.bankAcc;
  } else if (ply === p3) {  
    ply3BankDisp.innerText = p3.bankAcc;
  } else if (ply === p4) {  
    ply4BankDisp.innerText = p4.bankAcc;
  }
  checkWin();
};

dispVal = (ply) => {
  if (ply === p1) {
    ply1ValDisp.innerText = p1.totVal;
  } else if (ply === p2) {
    ply2ValDisp.innerText = p2.totVal;
  } else if (ply === p3) {  
    ply3ValDisp.innerText = p3.totVal;
  } else if (ply === p4) {  
    ply4ValDisp.innerText = p4.totVal;
  }
};

dispHand = (ply) => {
  if (ply === p1) {
    ply1HandDisp.innerText = '';
    for (let i = 0; i < p1.propsOwned.length; i++) {
      
      if (i > 0) {
        ply1HandDisp.innerText += ', ';
      }
      ply1HandDisp.innerText += p1.propsOwned[i];
    }
  } else if (ply === p2) {
    ply2HandDisp.innerText = '';
    for (let i = 0; i < p2.propsOwned.length; i++) {
      if (i > 0) {
        ply2HandDisp.innerText += ', ';
      }
      ply2HandDisp.innerText += p2.propsOwned[i];
    }
  } else if (ply === p3) {  
    ply3HandDisp.innerText = '';
    for (let i = 0; i < p3.propsOwned.length; i++) {
      if (i > 0) {
        ply3HandDisp.innerText += ', ';
      }
      ply3HandDisp.innerText += p3.propsOwned[i];
    }
  } else if (ply === p4) {  
    ply4HandDisp.innerText = '';
    for (let i = 0; i < p4.propsOwned.length; i++) {
      if (i > 0) {
        ply4HandDisp.innerText += ', ';
      }
      ply4HandDisp.innerText += p4.propsOwned[i];
    }
  }
};

createNotEndTurn = (message) => {
  notMsg.innerText = message;
  notBox.style.opacity = 1;
  clearCardBtn.style.opacity = 1;

  clearCardBtn.onclick = () => {
    notBox.style.opacity = 0;
    changeTurn();
  };
};

createNot = (message) => {
  notMsg.innerText = message;
  notBox.style.opacity = 1;
  clearCardBtn.style.opacity = 1;
  clearCardBtn.onclick = () => {
    notBox.style.opacity = 0;
  };
};

createTempNot = (message) => {
  notMsg.innerText = message;
  notBox.style.opacity = 1;
  clearCardBtn.style.opacity = 0;
};

pauseJumpPos = (ply, newPos) => {
  setTimeout(() => {
    notBox.style.opacity = 0;                   
    spacesArr[newPos].appendChild(ply.token);   
    ply.curPos = newPos;                        
    checkSpc(ply);                              
  }, 2000);  
};

gainMoney = (ply, amtGain) => {
  ply.bankAcc += amtGain;
  dispMoney(ply);
  ply.totVal += amtGain;
  dispVal(ply);
  checkWin();
};

buyProp = (ply, prop) => {
  const propName = prop.name;
  const propCost = prop.cost;
  if (checkMoney(ply, propCost) === false) {
    createNotEndTurn(
      `${propName} only costs $${propCost} but you are too poor to buy it.`
    );
  } else {
    notMsg.innerText = `${ply.persName} landed on ${propName} which costs $${propCost}. Would you like to purchase ${propName}?`;
    notBox.style.opacity = 1;
    yesBtn.style.opacity = 1;
    noBtn.style.opacity = 1;
    clearCardBtn.style.opacity = 0;
    yesBtn.onclick = () => {
      if (checkMoney(ply, propCost) === true) {
        gainMoney(ply, -1 * prop.cost);
        ply.totVal += prop.cost / 2;
        dispVal(ply);
        ply.propsOwned.push(prop.name);
        ply.propsOwnedSpcs.push(prop.spc);
        ply.propsOwnedObjs.push(prop);
        dispHand(ply);
        prop.isOwned = true;
        prop.owner = ply;
        prop.spc.style.borderWidth = '0.4vh';
        prop.spc.style.borderColor = ply.color;
        yesBtn.style.opacity = 0;
        noBtn.style.opacity = 0;
        clearCardBtn.style.opacity = 1;
        notBox.style.opacity = 0;
        changeTurn();
      } else {
        yesBtn.style.opacity = 0;
        noBtn.style.opacity = 0;
        clearCardBtn.style.opacity = 1;
        changeTurn();
      }
    };
    noBtn.onclick = () => {
      notBox.style.opacity = 0;
      yesBtn.style.opacity = 0;
      noBtn.style.opacity = 0;
      clearCardBtn.style.opacity = 1;
      changeTurn();
    };
  }
};

payRent = (curPly, owner, prop) => {
  let propName = prop.name;
  let ownerName = owner.persName;
  let propRent = prop.rent;
  if (prop.isMort === false) {
    gainMoney(curPly, -1 * prop.rent);
    gainMoney(owner, prop.rent);
    createNotEndTurn(
      `${curPly.persName} landed on ${propName}. Pay ${ownerName} $${propRent}.`
    );
  } else if (prop.isMort === true) {
    createNotEndTurn(
      `${curPly.persName} landed on ${propName} but it is mortgaged.`
    );
  }
};

checkOwned = (ply) => {
  let propIndex = ply.curPos;
  let property = propsArr[propIndex];
  let propIsOwned = property.isOwned;
  let owner = property.owner;
  if (propIsOwned === true && ply !== owner) {
    payRent(ply, owner, property);
  } else if (propIsOwned === false) {
    buyProp(ply, property);
  } else {
    createNotEndTurn(
      `You landed on ${property.name} but you already own it so your stay is free!`
    );
  }
};

checkSpc = (ply) => {
  if (ply.curPos === 0) {
    createNotEndTurn(`${ply.persName} landed on go, collect an extra $100.`);
    gainMoney(ply, 100);
  } else if (ply.curPos === 30) {
    createTempNot('Go directly to jail. Do not pass go. Do not collect $200.');
    rollDoubles = false;
    pauseJumpPos(ply, 10);
  } else if (ply.curPos === 4) {
    createNotEndTurn(`${ply.persName} landed on income taxes. Pay $200.`);
    gainMoney(ply, -200);
    freeParkPot += 200;
  } else if (ply.curPos === 10) {
    createNotEndTurn(`${ply.persName} is just visiting jail.`);
  } else if (ply.curPos === 38) {
    createNotEndTurn(`${ply.persName} landed on luxury taxes. Pay $75.`);
    gainMoney(ply, -75);
    freeParkPot += 75;
  } else if (ply.curPos === 7 || ply.curPos === 22 || ply.curPos === 36) {
    createTempNot(
      `${ply.persName} landed on a chance space. You will now jump to a random space on the board. Good luck!`
    );
    let randomSpc = Math.floor(Math.random() * 39);
    pauseJumpPos(ply, randomSpc);
  } else if (ply.curPos === 20) {
    createNotEndTurn(
      `${ply.persName} landed on Free Parking. Collect the $${freeParkPot} jackpot!`
    );
    gainMoney(ply, freeParkPot);
    freeParkPot = 0;
  } else if (ply.curPos === 2 || ply.curPos === 17 || ply.curPos === 33) {
    let randomGain = Math.ceil(Math.random() * 150);
    let randomLoss = Math.ceil(Math.random() * 100);
    let fateDecider = Math.ceil(Math.random() * 2);
    if (fateDecider === 1) {
      createNotEndTurn(
        `${ply.persName} landed on Community Chest and today is their lucky day. Collect $${randomGain}!`
      );
      gainMoney(ply, randomGain);
    } else if (fateDecider === 2) {
      createNotEndTurn(
        `Uh-oh! ${ply.persName} landed on Community Chest and it's empty. Pay $${randomLoss}.`
      );
      gainMoney(ply, -1 * randomLoss);
      freeParkPot += randomLoss;
    }
  } else {
    checkOwned(ply);
  }
};



rollDice = (ply) => {
  mortActive = false;
  unMortActive = false;
  buyHouseActive = false;
  if (ply === p1) {
    p1MortBtn.style.opacity = 0;
    p1BuyHouseBtn.style.opacity = 0;
    p1UnMortBtn.style.opacity = 0;
  } else if (ply === p2) {
    p2MortBtn.style.opacity = 0;
    p2BuyHouseBtn.style.opacity = 0;
    p2UnMortBtn.style.opacity = 0;
  } else if (ply === p3) {
    p3MortBtn.style.opacity = 0;
    p3BuyHouseBtn.style.opacity = 0;
    p3UnMortBtn.style.opacity = 0;
  } else if (ply === p4) {
    p4MortBtn.style.opacity = 0;
    p4BuyHouseBtn.style.opacity = 0;
    p4UnMortBtn.style.opacity = 0;
  }
  notBox.style.opacity = 0;
  d1Disp.style.opacity = 1;
  d2Disp.style.opacity = 1;
  let dice1 = Math.ceil(Math.random() * 6);
  let dice2 = Math.ceil(Math.random() * 6);
  if (dice1 === 1) {
    d1Disp.style.backgroundImage = "url('resources/dice1.png')";
  } else if (dice1 === 2) {
    d1Disp.style.backgroundImage = "url('resources/dice2.png')";
  } else if (dice1 === 3) {
    d1Disp.style.backgroundImage = "url('resources/dice3.png')";
  } else if (dice1 === 4) {
    d1Disp.style.backgroundImage = "url('resources/dice4.png')";
  } else if (dice1 === 5) {
    d1Disp.style.backgroundImage = "url('resources/dice5.png')";
  } else if (dice1 === 6) {
    d1Disp.style.backgroundImage = "url('resources/dice6.png')";
  }
  if (dice2 === 1) {
    d2Disp.style.backgroundImage = "url('resources/dice1.png')";
  } else if (dice2 === 2) {
    d2Disp.style.backgroundImage = "url('resources/dice2.png')";
  } else if (dice2 === 3) {
    d2Disp.style.backgroundImage = "url('resources/dice3.png')";
  } else if (dice2 === 4) {
    d2Disp.style.backgroundImage = "url('resources/dice4.png')";
  } else if (dice2 === 5) {
    d2Disp.style.backgroundImage = "url('resources/dice5.png')";
  } else if (dice2 === 6) {
    d2Disp.style.backgroundImage = "url('resources/dice6.png')";
  }
  if (dice1 === dice2) {
    rollDoubles = true;
  }
  setTimeout(
    (finishTurn = () => {
      let roll = dice1 + dice2;
      ply.curPos += roll;
      if (ply.curPos >= spacesArr.length) {
        pausePassGo(ply);
      } else {
        spacesArr[ply.curPos].appendChild(ply.token);
        checkSpc(ply);
      }
    }),
    1200
  );
};

pausePassGo = (ply) => {
  ply.curPos -= 40;  
  spacesArr[ply.curPos].appendChild(ply.token);  

  
  createTempNot(`${ply.persName} passed Go. Collect $200.`);

  
  gainMoney(ply, 200);

  
  setTimeout(() => {
    checkSpc(ply);  
  }, 2000);
};

checkWin = () => {
  if (p1.totVal < 0) {
    setTimeout(() => {
      window.location.href = 'gameover.html' + '#' + p2.persName;
    }, 2000);
  } else if (p2.totVal < 0) {
    setTimeout(() => {
      window.location.href = 'gameover.html' + '#' + p1.persName;
    }, 2000);
  } else if (p3.totVal < 0) {
    setTimeout(() => {
      window.location.href = 'gameover.html' + '#' + p4.persName;
    }, 2000);
  } else if (p4.totVal < 0) {
    setTimeout(() => {
      window.location.href = 'gameover.html' + '#' + p3.persName;
    }, 2000);
  }
};


yesBtn.onclick = () => {
  if (checkMoney(ply, propCost)) {
    gainMoney(ply, -1 * prop.cost);
    ply.totVal += prop.cost / 2;
    dispVal(ply);
    ply.propsOwned.push(prop.name);
    ply.propsOwnedSpcs.push(prop.spc);
    ply.propsOwnedObjs.push(prop);
    dispHand(ply);
    prop.isOwned = true;
    prop.owner = ply;
    prop.spc.style.borderWidth = '0.4vh';
    prop.spc.style.borderColor = ply.color;

   
    yesBtn.style.opacity = 0;
    noBtn.style.opacity = 0;
    clearCardBtn.style.opacity = 1;
    notBox.style.opacity = 0;

    
    setTimeout(() => changeTurn(), 300); 
  } else {
    
    createNot(`${ply.persName} does not have enough money to purchase ${propName}.`);
    yesBtn.style.opacity = 0;
    noBtn.style.opacity = 0;
    clearCardBtn.style.opacity = 1;

    
    setTimeout(() => changeTurn(), 300); 
  }
};

noBtn.onclick = () => {
  
  notBox.style.opacity = 0;
  yesBtn.style.opacity = 0;
  noBtn.style.opacity = 0;
  clearCardBtn.style.opacity = 1;

  
  setTimeout(() => changeTurn(), 300); 
};

clearCardBtn.onclick = () => {
  notBox.style.opacity = 0;

  
  setTimeout(() => changeTurn(), 300);
};

function hideAllButtons() {
  
  p1MortBtn.style.opacity = 0;
  p1UnMortBtn.style.opacity = 0;
  p1BuyHouseBtn.style.opacity = 0;

  p2MortBtn.style.opacity = 0;
  p2UnMortBtn.style.opacity = 0;
  p2BuyHouseBtn.style.opacity = 0;

  p3MortBtn.style.opacity = 0;
  p3UnMortBtn.style.opacity = 0;
  p3BuyHouseBtn.style.opacity = 0;

  p4MortBtn.style.opacity = 0;
  p4UnMortBtn.style.opacity = 0;
  p4BuyHouseBtn.style.opacity = 0;
}


mortProp1 = () => {
  createNot(
    'Click on the property you want to mortgage. This will also sell any houses it currently has.'
  );

  
  const propSpcs = currentPly.propsOwnedSpcs;  
  const propObjs = currentPly.propsOwnedObjs;

  for (let i = 0; i < propSpcs.length; i++) {
    propSpcs[i].onclick = () => {
      if (currentPly === p1 || currentPly === p2 || currentPly === p3 || currentPly === p4) {
        if (mortActive === true) {
          if (propObjs[i].isMort === true) {
            createNot(`${propObjs[i].name} is already mortgaged.`);
            mortActive = false;
          } else {
            propObjs[i].isMort = true;
            if (propObjs[i].type === 'color') {
              createNot(
                `${propObjs[i].name} is now mortgaged. Collect $${
                  propObjs[i].cost / 2
                } for mortgaging the property and $${
                  propObjs[i].curHouses * (propObjs[i].houseCost / 2)
                } for selling its ${propObjs[i].curHouses} house(s).`
              );
              gainMoney(currentPly, propObjs[i].cost / 2);
              gainMoney(
                currentPly,
                propObjs[i].curHouses * (propObjs[i].houseCost / 2)
              );
              currentPly.totVal -=
                propObjs[i].cost / 2 +
                propObjs[i].curHouses * (propObjs[i].houseCost / 2);
              mortActive = false;
              dispVal(currentPly);
            } else {
              createNot(
                `${propObjs[i].name} is now mortgaged. Collect $${
                  propObjs[i].cost / 2
                }.`
              );
              gainMoney(currentPly, propObjs[i].cost / 2);
              currentPly.totVal -= propObjs[i].cost / 2;
              mortActive = false;
              dispVal(currentPly);
            }
          }
        }
      }
    };
  }
};

mortProp2 = () => {
  createNot(
    'Click on the property you want to mortgage. This will also sell any houses it currently has.'
  );

  
  const propSpcs = currentPly.propsOwnedSpcs;  
  const propObjs = currentPly.propsOwnedObjs;  

  for (let i = 0; i < propSpcs.length; i++) {
    propSpcs[i].onclick = () => {
      if (currentPly === p1 || currentPly === p2 || currentPly === p3 || currentPly === p4) {
        if (mortActive === true) {
          if (propObjs[i].isMort === true) {
            createNot(`${propObjs[i].name} is already mortgaged.`);
            mortActive = false;
          } else {
            propObjs[i].isMort = true;
            if (propObjs[i].type === 'color') {
              createNot(
                `${propObjs[i].name} is now mortgaged. Collect $${
                  propObjs[i].cost / 2
                } for mortgaging the property and $${
                  propObjs[i].curHouses * (propObjs[i].houseCost / 2)
                } for selling its ${propObjs[i].curHouses} house(s).`
              );
              gainMoney(currentPly, propObjs[i].cost / 2);
              gainMoney(
                currentPly,
                propObjs[i].curHouses * (propObjs[i].houseCost / 2)
              );
              currentPly.totVal -=
                propObjs[i].cost / 2 +
                propObjs[i].curHouses * (propObjs[i].houseCost / 2);
              mortActive = false;
              dispVal(currentPly);
            } else {
              createNot(
                `${propObjs[i].name} is now mortgaged. Collect $${
                  propObjs[i].cost / 2
                }.`
              );
              gainMoney(currentPly, propObjs[i].cost / 2);
              currentPly.totVal -= propObjs[i].cost / 2;
              mortActive = false;
              dispVal(currentPly);
            }
          }
        }
      }
    };
  }
};

mortProp3 = () => {
  createNot(
    'Click on the property you want to mortgage. This will also sell any houses it currently has.'
  );

  const propSpcs = p3.propsOwnedSpcs;  
  const propObjs = p3.propsOwnedObjs;  

  for (let i = 0; i < propSpcs.length; i++) {
    propSpcs[i].onclick = () => {
      if (currentPly === p3) {
        if (mortActive === true) {
          if (propObjs[i].isMort === true) {
            createNot(`${propObjs[i].name} is already mortgaged.`);
            mortActive = false;
          } else {
            propObjs[i].isMort = true;
            if (propObjs[i].type === 'color') {
              createNot(
                `${propObjs[i].name} is now mortgaged. Collect $${
                  propObjs[i].cost / 2
                } for mortgaging the property and $${
                  propObjs[i].curHouses * (propObjs[i].houseCost / 2)
                } for selling its ${propObjs[i].curHouses} house(s).`
              );
              gainMoney(p3, propObjs[i].cost / 2);
              gainMoney(p3, propObjs[i].curHouses * (propObjs[i].houseCost / 2));
              p3.totVal -= propObjs[i].cost / 2 + propObjs[i].curHouses * (propObjs[i].houseCost / 2);
              mortActive = false;
              dispVal(p3);
            } else {
              createNot(`${propObjs[i].name} is now mortgaged. Collect $${
                propObjs[i].cost / 2
              }.`);
              gainMoney(p3, propObjs[i].cost / 2);
              p3.totVal -= propObjs[i].cost / 2;
              mortActive = false;
              dispVal(p3);
            }
          }
        }
      }
    };
  }
};

mortProp4 = () => {
  createNot(
    'Click on the property you want to mortgage. This will also sell any houses it currently has.'
  );

  const propSpcs = p4.propsOwnedSpcs;  
  const propObjs = p4.propsOwnedObjs;  

  for (let i = 0; i < propSpcs.length; i++) {
    propSpcs[i].onclick = () => {
      if (currentPly === p4) {
        if (mortActive === true) {
          if (propObjs[i].isMort === true) {
            createNot(`${propObjs[i].name} is already mortgaged.`);
            mortActive = false;
          } else {
            propObjs[i].isMort = true;
            if (propObjs[i].type === 'color') {
              createNot(
                `${propObjs[i].name} is now mortgaged. Collect $${
                  propObjs[i].cost / 2
                } for mortgaging the property and $${
                  propObjs[i].curHouses * (propObjs[i].houseCost / 2)
                } for selling its ${propObjs[i].curHouses} house(s).`
              );
              gainMoney(p4, propObjs[i].cost / 2);
              gainMoney(p4, propObjs[i].curHouses * (propObjs[i].houseCost / 2));
              p4.totVal -= propObjs[i].cost / 2 + propObjs[i].curHouses * (propObjs[i].houseCost / 2);
              mortActive = false;
              dispVal(p4);
            } else {
              createNot(`${propObjs[i].name} is now mortgaged. Collect $${
                propObjs[i].cost / 2
              }.`);
              gainMoney(p4, propObjs[i].cost / 2);
              p4.totVal -= propObjs[i].cost / 2;
              mortActive = false;
              dispVal(p4);
            }
          }
        }
      }
    };
  }
};

checkMoney = (ply, amtPay) => {
  if (ply.bankAcc >= amtPay) {
    return true;
  } else {
    createNot(`${ply.persName} does not have enough money to do this.`);
    unMortActive = false;
    mortActive = false;
    buyHouseActive = false;
    return false;
  }
};

unMortProp1 = (ply) => {
  createNot('Click on the property you want to unmortgage.');
  const propSpcs = ply.propsOwnedSpcs;
  const propObjs = ply.propsOwnedObjs;
  for (let i = 0; i < propSpcs.length; i++) {
    if (currentPly === ply.persName) {
      if (unMortActive === true) {
        propSpcs[i].onclick = () => {
          if (propObjs[i].isMort === false) {
            createNot(`${propObjs[i].name} is not mortgaged.`);
            unMortActive = false;
          } else {
            if (checkMoney(ply, (propObjs[i].cost / 2) * 1.1) === true) {
              propObjs[i].isMort = false;
              createNot(
                `${propObjs[i].name} is now unmortgaged. Pay $${
                  (propObjs[i].cost / 2) * 1.1
                }.`
              );
              gainMoney(ply, (propObjs[i].cost / 2) * -1.1);
              ply.totVal += propObjs[i].cost / 2;
              dispVal(ply);
              unMortActive = false;
            }
          }
        };
      }
    }
  }
};


unMortProp2 = () => {
  createNot('Click on the property you want to unmortgage.');
  const propSpcs = p2.propsOwnedSpcs;
  const propObjs = p2.propsOwnedObjs;
  for (let i = 0; i < propSpcs.length; i++) {
    if (currentPly === 'p2') {
      if (unMortActive === true) {
        propSpcs[i].onclick = () => {
          if (propObjs[i].isMort === false) {
            createNot(`${propObjs[i].name} is not mortgaged.`);
            unMortActive = false;
          } else {
            if (checkMoney(p2, (propObjs[i].cost / 2) * 1.1) === true) {
              propObjs[i].isMort = false;
              createNot(
                `${propObjs[i].name} is now unmortgaged. Pay $${
                  (propObjs[i].cost / 2) * 1.1
                }.`
              );
              gainMoney(p2, (propObjs[i].cost / 2) * -1.1);
              p2.totVal += propObjs[i].cost / 2;
              unMortActive = false;
              dispVal(p2);
            }
          }
        };
      }
    }
  }
};

unMortProp3 = () => {
  createNot('Click on the property you want to unmortgage.');
  const propSpcs = p3.propsOwnedSpcs;
  const propObjs = p3.propsOwnedObjs;
  for (let i = 0; i < propSpcs.length; i++) {
    if (currentPly === p3) {
      if (unMortActive === true) {
        propSpcs[i].onclick = () => {
          if (propObjs[i].isMort === false) {
            createNot(`${propObjs[i].name} is not mortgaged.`);
            unMortActive = false;
          } else {
            if (checkMoney(p3, (propObjs[i].cost / 2) * 1.1) === true) {
              propObjs[i].isMort = false;
              createNot(
                `${propObjs[i].name} is now unmortgaged. Pay $${
                  (propObjs[i].cost / 2) * 1.1
                }.`
              );
              gainMoney(p3, (propObjs[i].cost / 2) * -1.1);
              p3.totVal += propObjs[i].cost / 2;
              dispVal(p3);
              unMortActive = false;
            }
          }
        };
      }
    }
  }
};

unMortProp4 = () => {
  createNot('Click on the property you want to unmortgage.');
  const propSpcs = p4.propsOwnedSpcs;
  const propObjs = p4.propsOwnedObjs;
  for (let i = 0; i < propSpcs.length; i++) {
    if (currentPly === p4) {
      if (unMortActive === true) {
        propSpcs[i].onclick = () => {
          if (propObjs[i].isMort === false) {
            createNot(`${propObjs[i].name} is not mortgaged.`);
            unMortActive = false;
          } else {
            if (checkMoney(p4, (propObjs[i].cost / 2) * 1.1) === true) {
              propObjs[i].isMort = false;
              createNot(
                `${propObjs[i].name} is now unmortgaged. Pay $${
                  (propObjs[i].cost / 2) * 1.1
                }.`
              );
              gainMoney(p4, (propObjs[i].cost / 2) * -1.1);
              p4.totVal += propObjs[i].cost / 2;
              dispVal(p4);
              unMortActive = false;
            }
          }
        };
      }
    }
  }
};


buyHouse1 = () => {
  createNot('Click on a property to purchase a house for it.');
  const propSpcs = p1.propsOwnedSpcs;
  const propObjs = p1.propsOwnedObjs;
  for (let i = 0; i < propSpcs.length; i++) {
    propSpcs[i].onclick = () => {
      if (currentPly === 'p1') {
        if (buyHouseActive === true) {
          if (
            propObjs[i].spcNum === 5 ||
            propObjs[i].spcNum === 15 ||
            propObjs[i].spcNum === 25 ||
            propObjs[i].spcNum === 35 ||
            propObjs[i].spcNum === 12 ||
            propObjs[i].spcNum === 28
          ) {
            createNot(
              `You can't build houses on ${propObjs[i].name} because it is not a color set property.`
            );
            buyHouseActive = false;
          } else if (propObjs[i].isMort === true) {
            createNot(
              `${propObjs[i].name} is mortgaged. You must unmortgage it before you can buy a house.`
            );
            buyHouseActive = false;
          } else if (propObjs[i].curHouses >= 5) {
            createNot(
              `${propObjs[i].name} already has the maximum number of houses and costs $${propObjs[i].rent} to land on.`
            );
            buyHouseActive = false;
          } else {
            if (checkMoney(p1, propObjs[i].houseCost) === true) {
              propObjs[i].curHouses += 1;
              propObjs[i].rent = Math.floor(propObjs[i].rent * 2.5);
              notMsg.innerText = `You purchased a house for ${propObjs[i].name} which now costs $${propObjs[i].rent} to land on.`;
              notBox.style.opacity = 1;
              clearCardBtn.onclick = () => {
                notBox.style.opacity = 0;
                buyHouseActive = false;
              };
              gainMoney(p1, -1 * propObjs[i].houseCost);
              p1.totVal += propObjs[i].houseCost / 2;
              dispVal(p1);
              const img = document.createElement('img');
              img.src = 'resources/house.png';
              img.style.width = '1.3vh';
              propSpcs[i].appendChild(img);
              propSpcs[i].style.display = 'flex';
              propSpcs[i].style.flexWrap = 'wrap';
              propSpcs[i].style.alignItems = 'flex-start';
            }
          }
        }
      }
    };
  }
};
buyHouse2 = () => {
  createNot('Click on a property to purchase a house for it.');
  const propSpcs = p2.propsOwnedSpcs;
  const propObjs = p2.propsOwnedObjs;
  for (let i = 0; i < propSpcs.length; i++) {
    propSpcs[i].onclick = () => {
      if (currentPly === 'p2') {
        if (buyHouseActive === true) {
          if (
            propObjs[i].spcNum === 5 ||
            propObjs[i].spcNum === 15 ||
            propObjs[i].spcNum === 25 ||
            propObjs[i].spcNum === 35 ||
            propObjs[i].spcNum === 12 ||
            propObjs[i].spcNum === 28
          ) {
            createNot(
              `You can't build houses on ${propObjs[i].name} because it is not a color set property.`
            );
            buyHouseActive = false;
          } else if (propObjs[i].isMort === true) {
            createNot(
              `${propObjs[i].name} is mortgaged. You must unmortgage it before you can buy a house.`
            );
            buyHouseActive = false;
          } else if (propObjs[i].curHouses >= 5) {
            createNot(
              `${propObjs[i].name} already has the maximum number of houses and costs $${propObjs[i].rent} to land on.`
            );
            buyHouseActive = false;
          } else {
            if (checkMoney(p2, propObjs[i].houseCost) === true) {
              propObjs[i].curHouses += 1;
              propObjs[i].rent = Math.floor(propObjs[i].rent * 2.5);
              notMsg.innerText = `You purchased a house for ${propObjs[i].name} which now costs $${propObjs[i].rent} to land on.`;
              notBox.style.opacity = 1;
              clearCardBtn.onclick = () => {
                notBox.style.opacity = 0;
                buyHouseActive = false;
              };
              gainMoney(p2, -1 * propObjs[i].houseCost);
              p2.totVal += propObjs[i].houseCost / 2;
              dispVal(p2);
              const img = document.createElement('img');
              img.src = 'resources/house.png';
              img.style.width = '1.3vh';
              propSpcs[i].appendChild(img);
              propSpcs[i].style.display = 'flex';
              propSpcs[i].style.flexWrap = 'wrap';
              propSpcs[i].style.alignItems = 'flex-start';
            }
          }
        }
      }
    };
  }
};

buyHouse3 = () => {
  createNot('Click on a property to purchase a house for it.');
  const propSpcs = p3.propsOwnedSpcs;
  const propObjs = p3.propsOwnedObjs;
  for (let i = 0; i < propSpcs.length; i++) {
    propSpcs[i].onclick = () => {
      if (currentPly === 'p3') {
        if (buyHouseActive === true) {
          if (
            propObjs[i].spcNum === 5 ||
            propObjs[i].spcNum === 15 ||
            propObjs[i].spcNum === 25 ||
            propObjs[i].spcNum === 35 ||
            propObjs[i].spcNum === 12 ||
            propObjs[i].spcNum === 28
          ) {
            createNot(
              `You can't build houses on ${propObjs[i].name} because it is not a color set property.`
            );
            buyHouseActive = false;
          } else if (propObjs[i].isMort === true) {
            createNot(
              `${propObjs[i].name} is mortgaged. You must unmortgage it before you can buy a house.`
            );
            buyHouseActive = false;
          } else if (propObjs[i].curHouses >= 5) {
            createNot(
              `${propObjs[i].name} already has the maximum number of houses and costs $${propObjs[i].rent} to land on.`
            );
            buyHouseActive = false;
          } else {
            if (checkMoney(p3, propObjs[i].houseCost) === true) {
              propObjs[i].curHouses += 1;
              propObjs[i].rent = Math.floor(propObjs[i].rent * 2.5);
              notMsg.innerText = `You purchased a house for ${propObjs[i].name} which now costs $${propObjs[i].rent} to land on.`;
              notBox.style.opacity = 1;
              clearCardBtn.onclick = () => {
                notBox.style.opacity = 0;
                buyHouseActive = false;
              };
              gainMoney(p3, -1 * propObjs[i].houseCost);
              p3.totVal += propObjs[i].houseCost / 2;
              dispVal(p3);
              const img = document.createElement('img');
              img.src = 'resources/house.png';
              img.style.width = '1.3vh';
              propSpcs[i].appendChild(img);
              propSpcs[i].style.display = 'flex';
              propSpcs[i].style.flexWrap = 'wrap';
              propSpcs[i].style.alignItems = 'flex-start';
            }
          }
        }
      }
    };
  }
};

buyHouse4 = () => {
  createNot('Click on a property to purchase a house for it.');
  const propSpcs = p4.propsOwnedSpcs;
  const propObjs = p4.propsOwnedObjs;
  for (let i = 0; i < propSpcs.length; i++) {
    propSpcs[i].onclick = () => {
      if (currentPly === 'p4') {
        if (buyHouseActive === true) {
          if (
            propObjs[i].spcNum === 5 ||
            propObjs[i].spcNum === 15 ||
            propObjs[i].spcNum === 25 ||
            propObjs[i].spcNum === 35 ||
            propObjs[i].spcNum === 12 ||
            propObjs[i].spcNum === 28
          ) {
            createNot(
              `You can't build houses on ${propObjs[i].name} because it is not a color set property.`
            );
            buyHouseActive = false;
          } else if (propObjs[i].isMort === true) {
            createNot(
              `${propObjs[i].name} is mortgaged. You must unmortgage it before you can buy a house.`
            );
            buyHouseActive = false;
          } else if (propObjs[i].curHouses >= 5) {
            createNot(
              `${propObjs[i].name} already has the maximum number of houses and costs $${propObjs[i].rent} to land on.`
            );
            buyHouseActive = false;
          } else {
            if (checkMoney(p4, propObjs[i].houseCost) === true) {
              propObjs[i].curHouses += 1;
              propObjs[i].rent = Math.floor(propObjs[i].rent * 2.5);
              notMsg.innerText = `You purchased a house for ${propObjs[i].name} which now costs $${propObjs[i].rent} to land on.`;
              notBox.style.opacity = 1;
              clearCardBtn.onclick = () => {
                notBox.style.opacity = 0;
                buyHouseActive = false;
              };
              gainMoney(p4, -1 * propObjs[i].houseCost);
              p4.totVal += propObjs[i].houseCost / 2;
              dispVal(p4);
              const img = document.createElement('img');
              img.src = 'resources/house.png';
              img.style.width = '1.3vh';
              propSpcs[i].appendChild(img);
              propSpcs[i].style.display = 'flex';
              propSpcs[i].style.flexWrap = 'wrap';
              propSpcs[i].style.alignItems = 'flex-start';
            }
          }
        }
      }
    };
  }
};

let isTurnComplete = false;

changeTurn = () => {
  if (isTurnComplete) return; 
  isTurnComplete = true; 

  console.log(`Changing turn from ${currentPly}`);
  if (rollDoubles) {
    createNot('You rolled doubles so you get another turn!');
    rollDoubles = false;
    isTurnComplete = false; 
    return;
  }

  const players = ['p1', 'p2', 'p3', 'p4'];
  const rollButtons = [rollBtn1, rollBtn2, rollBtn3, rollBtn4];

  const currentIndex = players.indexOf(currentPly);
  const nextIndex = (currentIndex + 1) % players.length;

  
  currentPly = players[nextIndex];

  
  hideAllButtons();
  rollButtons.forEach((btn, index) => {
    btn.style.opacity = index === nextIndex ? 1 : 0;
  });

  
  if (currentPly === 'p1') {
    p1MortBtn.style.opacity = 1;
    p1UnMortBtn.style.opacity = 1;
    p1BuyHouseBtn.style.opacity = 1;
  } else if (currentPly === 'p2') {
    p2MortBtn.style.opacity = 1;
    p2UnMortBtn.style.opacity = 1;
    p2BuyHouseBtn.style.opacity = 1;
  } else if (currentPly === 'p3') {
    p3MortBtn.style.opacity = 1;
    p3UnMortBtn.style.opacity = 1;
    p3BuyHouseBtn.style.opacity = 1;
  } else if (currentPly === 'p4') {
    p4MortBtn.style.opacity = 1;
    p4UnMortBtn.style.opacity = 1;
    p4BuyHouseBtn.style.opacity = 1;
  }

  console.log(`Turn changed to ${currentPly}`);
};

console.log(`Current player is ${currentPly}`);
console.log(`Player 1 buttons: ${p1MortBtn.style.opacity}`);
console.log(`Player 2 buttons: ${p2MortBtn.style.opacity}`);
console.log(`Player 3 buttons: ${p3MortBtn.style.opacity}`);
console.log(`Player 4 buttons: ${p4MortBtn.style.opacity}`);


rollBtn1.addEventListener('click', () => {
  if (currentPly === 'p1') {
    isTurnComplete = false; 
    rollDice(p1);
  }
});

rollBtn2.addEventListener('click', () => {
  if (currentPly === 'p2') {
    isTurnComplete = false; 
    rollDice(p2);
  }
});

rollBtn3.addEventListener('click', () => {
  if (currentPly === 'p3') {
    isTurnComplete = false; 
    rollDice(p3);
  }
});

rollBtn4.addEventListener('click', () => {
  if (currentPly === 'p4') {
    isTurnComplete = false; 
    rollDice(p4);
  }
});


ply1NameBtn.addEventListener('click', () => {
  p1NameInput = document.getElementById('ply1Input').value;
  p1.persName = p1NameInput;
  document.querySelector('#ply1NameInput').style.opacity = 0;
  document.getElementById('ply1NameDisp').innerText = p1.persName;
  document.getElementById('nameHandDisp1').innerText = p1.persName;
  let firstLet = p1.persName[0];
  document.getElementById('token1').innerText = firstLet.toUpperCase();
});
ply2NameBtn.addEventListener('click', () => {
  p2NameInput = document.getElementById('ply2Input').value;
  p2.persName = p2NameInput;
  document.querySelector('#ply2NameInput').style.opacity = 0;
  document.getElementById('ply2NameDisp').innerText = p2.persName;
  document.getElementById('nameHandDisp2').innerText = p2.persName;
  let firstLet = p2.persName[0];
  document.getElementById('token2').innerText = firstLet.toUpperCase();
});
ply3NameBtn.addEventListener('click', () => {
  p3NameInput = document.getElementById('ply3Input').value;
  p3.persName = p3NameInput;
  document.querySelector('#ply3NameInput').style.opacity = 0;
  document.getElementById('ply3NameDisp').innerText = p3.persName;
  document.getElementById('nameHandDisp3').innerText = p3.persName;
  let firstLet = p3.persName[0];
  document.getElementById('token3').innerText = firstLet.toUpperCase();
});
ply4NameBtn.addEventListener('click', () => {
  p4NameInput = document.getElementById('ply4Input').value;
  p4.persName = p4NameInput;
  document.querySelector('#ply4NameInput').style.opacity = 0;
  document.getElementById('ply4NameDisp').innerText = p4.persName;
  document.getElementById('nameHandDisp4').innerText = p4.persName;
  let firstLet = p4.persName[0];
  document.getElementById('token4').innerText = firstLet.toUpperCase();
});


p1MortBtn.onclick = () => {
  mortActive = true;
  unMortActive = false;
  buyHouseActive = false;
  mortProp1();
};


p2MortBtn.onclick = () => {
  mortActive = true;
  unMortActive = false;
  buyHouseActive = false;
  mortProp2();
};


p3MortBtn.onclick = () => {
  mortActive = true;
  unMortActive = false;
  buyHouseActive = false;
  mortProp3();
};


p4MortBtn.onclick = () => {
  mortActive = true;
  unMortActive = false;
  buyHouseActive = false;
  mortProp4();
};


p1UnMortBtn.onclick = () => {
  unMortActive = true;
  mortActive = false;
  buyHouseActive = false;
  unMortProp1();
};


p2UnMortBtn.onclick = () => {
  unMortActive = true;
  mortActive = false;
  buyHouseActive = false;
  unMortProp2();
};


p3UnMortBtn.onclick = () => {
  unMortActive = true;
  mortActive = false;
  buyHouseActive = false;
  unMortProp3();
};


p4UnMortBtn.onclick = () => {
  unMortActive = true;
  mortActive = false;
  buyHouseActive = false;
  unMortProp4();
};


p1BuyHouseBtn.onclick = () => {
  buyHouseActive = true;
  unMortActive = false;
  mortActive = false;
  buyHouse1();
};


p2BuyHouseBtn.onclick = () => {
  buyHouseActive = true;
  unMortActive = false;
  mortActive = false;
  buyHouse2();
};


p3BuyHouseBtn.onclick = () => {
  buyHouseActive = true;
  unMortActive = false;
  mortActive = false;
  buyHouse3();
};


p4BuyHouseBtn.onclick = () => {
  buyHouseActive = true;
  unMortActive = false;
  mortActive = false;
  buyHouse4();
};



