import parser from 'xml2json';
import * as fs from "fs";
import * as path from "path";
import { Megogo } from '../types/megogo';

const file = fs.readFileSync(path.resolve(__dirname, '..', 'aaa.xml')).toString();

const json = (JSON.parse(parser.toJson(file)) as Megogo);
// console.log(json.objects.object.length);
// console.log(json.objects.object[0]);
fs.writeFileSync(path.resolve(__dirname, '..', 'parsed.json'), '');
const vodFiltered = json.objects.object.filter((val) => {
    return (val.vod == 'svod') && (val.type != "SEASON" && val.type != "SERIA" &&  val.type != "SHOWFILM" && val.type != "SHOW" && val.type != "EVENT" && val.type != "ANNOUNCE" && val.type != "NEWS" && val.type != "AD" && val.type != "FILM3D" && val.type != "MUSIC" && val.type != "ADT" && val.type != "SPORT" && val.type != "TV") && (val.protection == "0");
});
console.log(vodFiltered.length);
fs.appendFileSync(path.resolve(__dirname, '..', 'parsed.json'), JSON.stringify(vodFiltered, null, 2));
console.log('finished');