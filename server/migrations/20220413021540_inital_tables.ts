import { Knex } from "knex";

// TODO Is JSON the proper type for the table column you want to make for hours ie {mon: 12-2. tues:12-4} or should you just make each its own column?

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable("cities", (table) => {
            table.increments("id").primary();
            table.string("name").notNullable();
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
        .createTable("shops", (table) => {
            table.increments("id").primary();
            table.string("name").notNullable();
            table
                .integer("city_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("cities")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
        .createTable("artists", (table) => {
            table.increments("id").primary();
            table.string("name").notNullable();
            table
                .integer("shop_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("shops")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        });
}

export async function down(knex: Knex): Promise<void> {}
