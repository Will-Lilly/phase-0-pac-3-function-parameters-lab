function introduction(name) {
    const string = `Hi, my name is ${name}.`;
    return string;
}

function introductionWithLanguage(name, laguage) {
    
    const phrase = `Hi, my name is ${name} and I am learning to program in ${laguage}.`;
    return phrase;
}

// set a default for a argument by usingthe = operator
// name = "Will"
// language = "JavaScript"
function introductionWithLanguageOptional(name, language = "JavaScript") {
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return phrase;

}
const result = introductionWithLanguageOptional("Will");

console.log(result);
