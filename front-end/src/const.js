const IP_ADDRESS = 'http://35.189.69.132';
const API_PORT = ':8080/';
const API_REST = 'barfinder-0.0.1-SNAPSHOT/rest/';

const ROOT = IP_ADDRESS+API_PORT+API_REST;

export const BAR = ROOT+'bar/';
export const BREWER = ROOT+'brewery/';
export const DRINK = ROOT+'drink/';
export const OFFER = ROOT+'offer/';

export const GETALL = 'getall';
export const GET = 'get/';
export const CREATE = 'create';
export const UPDATE = 'update/';
export const DELETE = 'delete/'
