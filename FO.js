const helpModule = require('./commands/help')

const organizeModule = require('./commands/organize')

const treeModule = require('./commands/tree')




let input = process.argv.slice(1)


let command = input[1]





switch (command) {

    case 'tree':
        treeModule.treeKey(input[2])
        break;

    case 'organize':
        organizeModule.organizeKey(input[2])
        break;

    case 'help':
        helpModule.helpKey()
        break;

    default:
        console.log("PLEASE ENTER VALID COMMAND")
        break;

}



