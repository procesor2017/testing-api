const hooks = require('hooks')

stash = {}

// Hooks for taking ID 
hooks.after('Fetching a random joke > One joke', function(transaction){
    stash.jokeId = JSON.parse(transaction.real.body).value.id;
    console.log(stash.jokeId);
    return stash.jokeId;

});


//hooks for changing joke for '==' joke before
hooks.before('Changing the name of the main character > Changing the name in specific jokes', function(transaction){
    transaction.fullPath = transaction.fullPath.replace('2', stash.jokeId);
    console.log(transaction.fullPath);
    return transaction.request.uri = transaction.fullPath;
});

// Hooks for check before hooks, bcs they have bug in report
hooks.after('Changing the name of the main character > Changing the name in specific jokes', function(transaction){
    console.log(transaction.real.body)
});

// Examples how affect results, just change false on true and hooks put fail to report
hooks.after('Request Collection > Get a specific joke', function(transaction, done){
    stash.jokeId1 = JSON.parse(transaction.real.body).value.id;
    if (stash.jokeId1 == 5){
        transaction.fail = false
    }else{
        transaction.fail = true
    }
    done();
});

// Examples how to check header in response
hooks.afterEach(function(transaction){
    const header = transaction.test.actual.headers
    const content = header['content-type']
    if (content == 'application/json'){
        transaction.fail = false
    }else{
        transaction.fail = true
    }
});