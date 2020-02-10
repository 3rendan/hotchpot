class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :title
      t.string :accession_number
      t.string :author

      t.timestamps
    end
  end
end
