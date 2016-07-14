import Ecto.Query

alias PhoenixTrello.Repo
alias PhoenixTrello.User

# find_or_create_user = fn data ->  
# 	case Repo.all(from u in User, where: u.username == ^username and u.email == ^email) do
# 	   ->
	    
# 	end
# end

[
  %{
    first_name: "John",
    last_name: "Doe",
    email: "john@phoenix-trello.com",
    password: "12345678"
  },
]
|> Enum.map(&User.changeset(%User{}, &1))
|> Enum.each(&Repo.insert!(&1))
