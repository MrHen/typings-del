import Promise = require('pinkie-promise');

declare namespace del {
  export interface Options {
    force?: boolean;
    dryRun?: boolean;
  }

  export function sync(patterns: string | string[], opts?): Promise<string[]>;
}

declare function del(patterns: string | string[], opts?): Promise<string[]>;

export = del;
