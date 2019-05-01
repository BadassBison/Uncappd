json.set! @user.id do
    json.extract! @user, :username, :email, :f_name, :l_name, :location, :country
end