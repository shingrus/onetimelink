#!/usr/bin/env node

import {run} from './lib.mjs';

const exitCode = await run();
process.exit(exitCode);
