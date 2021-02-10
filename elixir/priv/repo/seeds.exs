# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Homework.Repo.insert!(%Homework.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Homework.{Merchants, Transactions, Users}

{:ok, user1} = Users.create_user(%{dob: "04/30/1988", first_name: "Josh", last_name: "Wiggins"})
{:ok, user2} = Users.create_user(%{dob: "05/30/1989", first_name: "Odeya", last_name: "Rush"})
{:ok, user3} = Users.create_user(%{dob: "06/30/1990", first_name: "Kurt", last_name: "Voelker"})

{:ok, merch1} =
  Merchants.create_merchant(%{name: "Amazon", description: "mankind's one-stop shop."})

{:ok, merch2} = Merchants.create_merchant(%{name: "Raboo", description: "hiding in plain sight."})

Transactions.create_transaction(%{
  amount: 50000,
  credit: true,
  debit: false,
  description: "something random1",
  merchant_id: merch1.id,
  user_id: user1.id
})

Transactions.create_transaction(%{
  amount: 99000,
  credit: false,
  debit: true,
  description: "something random2",
  merchant_id: merch2.id,
  user_id: user2.id
})

Transactions.create_transaction(%{
  amount: 1000,
  credit: true,
  debit: false,
  description: "something random3",
  merchant_id: merch2.id,
  user_id: user3.id
})
