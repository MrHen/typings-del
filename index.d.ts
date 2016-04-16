import Promise = require('pinkie-promise');

declare namespace del {
  export interface Options {
    force?: boolean;
    dryRun?: boolean;
  }

  export function sync(patterns: string | string[], opts?: Options): Promise<string[]>;
}

declare function del(patterns: string | string[], opts?: del.Options): Promise<string[]>;

export = del;
