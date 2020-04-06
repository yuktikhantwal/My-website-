$(()=>{
    let login_button = $('#login_button')
    let signup_button = $('#signup_button')
    let login_box = $('#login_box')
    let signup_box = $('#signup_box')

    login_button.show()
    signup_button.show()
    login_box.hide()
    signup_box.hide()

    login_button.click(()=>{
        login_button.hide()
        signup_button.hide()
        login_box.show()
        signup_box.hide()
    })
    signup_button.click(()=>{
        login_button.hide()
        signup_button.hide()
        login_box.hide()
        signup_box.show()
    })
})