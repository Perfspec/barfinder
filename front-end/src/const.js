const IP_ADDRESS = 'http://35.246.127.249/';
const API_PORT = ':8080/';
const API_REST = 'barfinder-0.0.1-SNAPSHOT/rest/';
export const ORIGIN = IP_ADDRESS+':3000/';

const ROOT = IP_ADDRESS+API_PORT+API_REST;

export const BAR = ROOT+'bar/';
export const BREWERY = ROOT+'brewery/';
export const DRINK = ROOT+'drink/';
export const OFFER = ROOT+'offer/';

export const ALL = 'getall';
export const GET = 'get/';
export const ADD = 'create';
export const UPD = 'update/';
export const DEL = 'delete/';
