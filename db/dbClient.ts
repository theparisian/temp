import { knex } from 'knex'
import { mapKeys, camelCase, snakeCase } from 'lodash'

const convertToCamel = (obj: any) => {
    return mapKeys(obj, (value, key) => camelCase(key))
}
const convertToSnakeCase = (value: string) => {
    if (value === '*') return value;
    // const matched = value.match(/(.*?)(\[[0-9]\])/);
    // if (matched) {
    //     return snakeCase(matched[1]) + matched[2];
    // }
    return snakeCase(value)
}

const dbclient = knex({
    client: 'pg',
    connection: {
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE
    },
    postProcessResponse: (result, queryContext) => {
        // TODO: add special case for raw results (depends on dialect)
        if (Array.isArray(result)) {
            return result.map(row => convertToCamel(row));
        } else {
            return convertToCamel(result);
        }
    },
    wrapIdentifier: (value, origImpl, queryContext) => origImpl(convertToSnakeCase(value))
})
export default dbclient
