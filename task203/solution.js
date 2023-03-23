import { startProgressBar } from './functions.js';
import ProgressBar from 'progress';

const bar = new ProgressBar(':bar :percent', { total: 100 })
startProgressBar(100);