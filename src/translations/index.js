/**
 * File Name :  Translations
 * Description:  Contains Localization code 
 */

import LocalizedStrings from 'react-localization'
import { localLang } from '../configs';
import en from "./en.json"
import hi from "./hi.json"
import ar from "./ar.json"

let strings;

if (!strings) {
    strings = new LocalizedStrings({
        hi,
        ar,
        en
    });
}


strings.setLanguage(localLang);

export default strings;