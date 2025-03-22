'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const complexStylesString = `
  background-color:#fff;
-webkit-border-radius: 5px;
  border-radius     : 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear   : both       ;
  cursor: pointer;
  float: left;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height:    40px;
  outline: 0;
  padding-left    : 18px;
  padding-right: 30px;
  ;

  ;
  position: relative;


  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


  white-space: nowrap;
  width: auto;
`;
/*  const obj = JSON.parse(sourceString);
  return obj; */

function convertToObject(sourceString) {
  const arrStr = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((elem) => elem !== '');
  const newArr1 = arrStr.map((st) => st.split(':').map((nStr) => nStr.trim()));

  const newObj = newArr1.reduce((accom, elem) => {
    const key = elem[0];
    const value = elem[1];

    accom[key] = value;

    return accom;
  }, {});

  return newObj;
}
convertToObject(complexStylesString);

module.exports = convertToObject;
