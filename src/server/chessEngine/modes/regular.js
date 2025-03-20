import { ChessBoard } from "../board";
import { Team, TEAM_BLACK, TEAM_WHITE } from "../teams";
import * as types from "../types";


const white = new TEAM_BLACK;
const black = new TEAM_WHITE;

white.enemy = black;
black.enemy = white;

const teams = [white, black]
const board = new ChessBoard;


export function initialize(){





}

