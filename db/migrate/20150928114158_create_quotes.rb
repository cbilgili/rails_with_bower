class CreateQuotes < ActiveRecord::Migration
  def change
    create_table :quotes do |t|
      t.text :content
      t.text :url
      t.text :notes

      t.timestamps null: false
    end
  end
end
