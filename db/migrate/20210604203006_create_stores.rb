class CreateStores < ActiveRecord::Migration[6.1]
  def change
    create_table :stores do |t|
      t.string :location
      t.integer :rating
      t.string :name

      t.timestamps
    end
  end
end
