class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.string :category, null: false

      t.timestamps
    end
  end
end
