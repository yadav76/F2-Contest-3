const puppeteer = require('puppeteer');
import { Browser } from 'puppeteer';

const url = 'https://github.com/trending';

const main = async () => {
    const browser: Browser  = await puppeteer.launch()
    console.log(123); 
}

main()