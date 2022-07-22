function helpfn(){
    console.log(`List of all commands - 
                                        1) tree command - node FO.js tree <dirname>
                                        2) organize command - node FO.js organize <dirname>
                                        3) help command - node FO.js help`)
}

module.exports = {
    helpKey : helpfn 
}