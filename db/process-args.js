const { argv } = require('node:process');

argv[2] = "postgres://koyeb-adm:npg_wiVHYb73SeFM@ep-calm-field-a2crhzcu.eu-central-1.pg.koyeb.app/koyebdb?sslmode=require"

console.log(argv);