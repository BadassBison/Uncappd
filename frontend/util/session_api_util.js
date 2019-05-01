export const signUp = user => (
    $.ajax({ 
        url: 'api/users', 
        method: 'post', 
        data: {user} 
    })
)

export const signIn = user => (
    $.ajax({ 
        url: 'api/session', 
        method: 'post', 
        data: {user} 
    })
)

export const signOut = user => (
    $.ajax({ 
        url: 'api/session', 
        method: 'delete'
    })
)