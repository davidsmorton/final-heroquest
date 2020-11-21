# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_21_013430) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "armors", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.integer "defense"
    t.boolean "wizard"
    t.string "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "artifacts", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "character_armors", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "characters_id"
    t.bigint "armors_id"
    t.index ["armors_id"], name: "index_character_armors_on_armors_id"
    t.index ["characters_id"], name: "index_character_armors_on_characters_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "attack"
    t.integer "defend"
    t.integer "body"
    t.integer "mind"
    t.integer "gold"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "users_id"
    t.bigint "heros_id"
    t.index ["heros_id"], name: "index_characters_on_heros_id"
    t.index ["users_id"], name: "index_characters_on_users_id"
  end

  create_table "heros", force: :cascade do |t|
    t.string "race"
    t.integer "attack"
    t.integer "defend"
    t.integer "body"
    t.integer "mind"
    t.string "image"
  end

  create_table "monsters", force: :cascade do |t|
    t.string "name"
    t.integer "attack"
    t.integer "defend"
    t.integer "body"
    t.integer "mind"
    t.integer "movement"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "potions", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "spells", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.boolean "chaos"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "weapons", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.integer "attack"
    t.boolean "wizard"
    t.string "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "character_armors", "armors", column: "armors_id"
  add_foreign_key "character_armors", "characters", column: "characters_id"
  add_foreign_key "characters", "heros", column: "heros_id"
  add_foreign_key "characters", "users", column: "users_id"
end
