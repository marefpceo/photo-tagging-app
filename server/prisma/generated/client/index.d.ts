/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Character
 *
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Game_image
 *
 */
export type Game_image = $Result.DefaultSelection<Prisma.$Game_imagePayload>;
/**
 * Model Data
 *
 */
export type Data = $Result.DefaultSelection<Prisma.$DataPayload>;
/**
 * Model Session
 *
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Characters
 * const characters = await prisma.character.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Characters
   * const characters = await prisma.character.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Characters
   * const characters = await prisma.character.findMany()
   * ```
   */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game_image`: Exposes CRUD operations for the **Game_image** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Game_images
   * const game_images = await prisma.game_image.findMany()
   * ```
   */
  get game_image(): Prisma.Game_imageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.data`: Exposes CRUD operations for the **Data** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Data
   * const data = await prisma.data.findMany()
   * ```
   */
  get data(): Prisma.DataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Character: 'Character';
    User: 'User';
    Game_image: 'Game_image';
    Data: 'Data';
    Session: 'Session';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'character' | 'user' | 'game_image' | 'data' | 'session';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>;
        fields: Prisma.CharacterFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>;
          };
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>;
          };
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[];
          };
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>;
          };
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[];
          };
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>;
          };
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>;
          };
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[];
          };
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>;
          };
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCharacter>;
          };
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CharacterGroupByOutputType>[];
          };
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>;
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number;
          };
        };
      };
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Game_image: {
        payload: Prisma.$Game_imagePayload<ExtArgs>;
        fields: Prisma.Game_imageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.Game_imageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Game_imagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.Game_imageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Game_imagePayload>;
          };
          findFirst: {
            args: Prisma.Game_imageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Game_imagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.Game_imageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Game_imagePayload>;
          };
          findMany: {
            args: Prisma.Game_imageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Game_imagePayload>[];
          };
          create: {
            args: Prisma.Game_imageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Game_imagePayload>;
          };
          createMany: {
            args: Prisma.Game_imageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.Game_imageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Game_imagePayload>[];
          };
          delete: {
            args: Prisma.Game_imageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Game_imagePayload>;
          };
          update: {
            args: Prisma.Game_imageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Game_imagePayload>;
          };
          deleteMany: {
            args: Prisma.Game_imageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.Game_imageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.Game_imageUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Game_imagePayload>[];
          };
          upsert: {
            args: Prisma.Game_imageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Game_imagePayload>;
          };
          aggregate: {
            args: Prisma.Game_imageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGame_image>;
          };
          groupBy: {
            args: Prisma.Game_imageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Game_imageGroupByOutputType>[];
          };
          count: {
            args: Prisma.Game_imageCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<Game_imageCountAggregateOutputType>
              | number;
          };
        };
      };
      Data: {
        payload: Prisma.$DataPayload<ExtArgs>;
        fields: Prisma.DataFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.DataFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.DataFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>;
          };
          findFirst: {
            args: Prisma.DataFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.DataFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>;
          };
          findMany: {
            args: Prisma.DataFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>[];
          };
          create: {
            args: Prisma.DataCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>;
          };
          createMany: {
            args: Prisma.DataCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.DataCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>[];
          };
          delete: {
            args: Prisma.DataDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>;
          };
          update: {
            args: Prisma.DataUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>;
          };
          deleteMany: {
            args: Prisma.DataDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.DataUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.DataUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>[];
          };
          upsert: {
            args: Prisma.DataUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>;
          };
          aggregate: {
            args: Prisma.DataAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateData>;
          };
          groupBy: {
            args: Prisma.DataGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DataGroupByOutputType>[];
          };
          count: {
            args: Prisma.DataCountArgs<ExtArgs>;
            result: $Utils.Optional<DataCountAggregateOutputType> | number;
          };
        };
      };
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>;
        fields: Prisma.SessionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[];
          };
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[];
          };
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[];
          };
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSession>;
          };
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SessionGroupByOutputType>[];
          };
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>;
            result: $Utils.Optional<SessionCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    character?: CharacterOmit;
    user?: UserOmit;
    game_image?: Game_imageOmit;
    data?: DataOmit;
    session?: SessionOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type Game_imageCountOutputType
   */

  export type Game_imageCountOutputType = {
    characters: number;
    game_leaders: number;
  };

  export type Game_imageCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    characters?: boolean | Game_imageCountOutputTypeCountCharactersArgs;
    game_leaders?: boolean | Game_imageCountOutputTypeCountGame_leadersArgs;
  };

  // Custom InputTypes
  /**
   * Game_imageCountOutputType without action
   */
  export type Game_imageCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game_imageCountOutputType
     */
    select?: Game_imageCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Game_imageCountOutputType without action
   */
  export type Game_imageCountOutputTypeCountCharactersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CharacterWhereInput;
  };

  /**
   * Game_imageCountOutputType without action
   */
  export type Game_imageCountOutputTypeCountGame_leadersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null;
    _avg: CharacterAvgAggregateOutputType | null;
    _sum: CharacterSumAggregateOutputType | null;
    _min: CharacterMinAggregateOutputType | null;
    _max: CharacterMaxAggregateOutputType | null;
  };

  export type CharacterAvgAggregateOutputType = {
    id: number | null;
    xCoordinate: number | null;
    yCoordinate: number | null;
    imageId: number | null;
  };

  export type CharacterSumAggregateOutputType = {
    id: number | null;
    xCoordinate: number | null;
    yCoordinate: number | null;
    imageId: number | null;
  };

  export type CharacterMinAggregateOutputType = {
    id: number | null;
    character_name: string | null;
    icon_location: string | null;
    xCoordinate: number | null;
    yCoordinate: number | null;
    imageId: number | null;
  };

  export type CharacterMaxAggregateOutputType = {
    id: number | null;
    character_name: string | null;
    icon_location: string | null;
    xCoordinate: number | null;
    yCoordinate: number | null;
    imageId: number | null;
  };

  export type CharacterCountAggregateOutputType = {
    id: number;
    character_name: number;
    icon_location: number;
    xCoordinate: number;
    yCoordinate: number;
    imageId: number;
    _all: number;
  };

  export type CharacterAvgAggregateInputType = {
    id?: true;
    xCoordinate?: true;
    yCoordinate?: true;
    imageId?: true;
  };

  export type CharacterSumAggregateInputType = {
    id?: true;
    xCoordinate?: true;
    yCoordinate?: true;
    imageId?: true;
  };

  export type CharacterMinAggregateInputType = {
    id?: true;
    character_name?: true;
    icon_location?: true;
    xCoordinate?: true;
    yCoordinate?: true;
    imageId?: true;
  };

  export type CharacterMaxAggregateInputType = {
    id?: true;
    character_name?: true;
    icon_location?: true;
    xCoordinate?: true;
    yCoordinate?: true;
    imageId?: true;
  };

  export type CharacterCountAggregateInputType = {
    id?: true;
    character_name?: true;
    icon_location?: true;
    xCoordinate?: true;
    yCoordinate?: true;
    imageId?: true;
    _all?: true;
  };

  export type CharacterAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Characters to fetch.
     */
    orderBy?:
      | CharacterOrderByWithRelationInput
      | CharacterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Characters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Characters
     **/
    _count?: true | CharacterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CharacterAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CharacterSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CharacterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CharacterMaxAggregateInputType;
  };

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
    [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>;
  };

  export type CharacterGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CharacterWhereInput;
    orderBy?:
      | CharacterOrderByWithAggregationInput
      | CharacterOrderByWithAggregationInput[];
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum;
    having?: CharacterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CharacterCountAggregateInputType | true;
    _avg?: CharacterAvgAggregateInputType;
    _sum?: CharacterSumAggregateInputType;
    _min?: CharacterMinAggregateInputType;
    _max?: CharacterMaxAggregateInputType;
  };

  export type CharacterGroupByOutputType = {
    id: number;
    character_name: string;
    icon_location: string;
    xCoordinate: number;
    yCoordinate: number;
    imageId: number;
    _count: CharacterCountAggregateOutputType | null;
    _avg: CharacterAvgAggregateOutputType | null;
    _sum: CharacterSumAggregateOutputType | null;
    _min: CharacterMinAggregateOutputType | null;
    _max: CharacterMaxAggregateOutputType | null;
  };

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CharacterGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CharacterGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>;
        }
      >
    >;

  export type CharacterSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      character_name?: boolean;
      icon_location?: boolean;
      xCoordinate?: boolean;
      yCoordinate?: boolean;
      imageId?: boolean;
      game_image?: boolean | Game_imageDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['character']
  >;

  export type CharacterSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      character_name?: boolean;
      icon_location?: boolean;
      xCoordinate?: boolean;
      yCoordinate?: boolean;
      imageId?: boolean;
      game_image?: boolean | Game_imageDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['character']
  >;

  export type CharacterSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      character_name?: boolean;
      icon_location?: boolean;
      xCoordinate?: boolean;
      yCoordinate?: boolean;
      imageId?: boolean;
      game_image?: boolean | Game_imageDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['character']
  >;

  export type CharacterSelectScalar = {
    id?: boolean;
    character_name?: boolean;
    icon_location?: boolean;
    xCoordinate?: boolean;
    yCoordinate?: boolean;
    imageId?: boolean;
  };

  export type CharacterOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'character_name'
    | 'icon_location'
    | 'xCoordinate'
    | 'yCoordinate'
    | 'imageId',
    ExtArgs['result']['character']
  >;
  export type CharacterInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    game_image?: boolean | Game_imageDefaultArgs<ExtArgs>;
  };
  export type CharacterIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    game_image?: boolean | Game_imageDefaultArgs<ExtArgs>;
  };
  export type CharacterIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    game_image?: boolean | Game_imageDefaultArgs<ExtArgs>;
  };

  export type $CharacterPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Character';
    objects: {
      game_image: Prisma.$Game_imagePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        character_name: string;
        icon_location: string;
        xCoordinate: number;
        yCoordinate: number;
        imageId: number;
      },
      ExtArgs['result']['character']
    >;
    composites: {};
  };

  type CharacterGetPayload<
    S extends boolean | null | undefined | CharacterDefaultArgs,
  > = $Result.GetResult<Prisma.$CharacterPayload, S>;

  type CharacterCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CharacterFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CharacterCountAggregateInputType | true;
  };

  export interface CharacterDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Character'];
      meta: { name: 'Character' };
    };
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(
      args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>,
    ): Prisma__CharacterClient<
      $Result.GetResult<
        Prisma.$CharacterPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CharacterClient<
      $Result.GetResult<
        Prisma.$CharacterPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(
      args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>,
    ): Prisma__CharacterClient<
      $Result.GetResult<
        Prisma.$CharacterPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CharacterClient<
      $Result.GetResult<
        Prisma.$CharacterPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     *
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CharacterFindManyArgs>(
      args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CharacterPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     *
     */
    create<T extends CharacterCreateArgs>(
      args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>,
    ): Prisma__CharacterClient<
      $Result.GetResult<
        Prisma.$CharacterPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CharacterCreateManyArgs>(
      args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CharacterPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     *
     */
    delete<T extends CharacterDeleteArgs>(
      args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>,
    ): Prisma__CharacterClient<
      $Result.GetResult<
        Prisma.$CharacterPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CharacterUpdateArgs>(
      args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>,
    ): Prisma__CharacterClient<
      $Result.GetResult<
        Prisma.$CharacterPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CharacterDeleteManyArgs>(
      args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CharacterUpdateManyArgs>(
      args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CharacterPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(
      args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>,
    ): Prisma__CharacterClient<
      $Result.GetResult<
        Prisma.$CharacterPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
     **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CharacterAggregateArgs>(
      args: Subset<T, CharacterAggregateArgs>,
    ): Prisma.PrismaPromise<GetCharacterAggregateType<T>>;

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCharacterGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Character model
     */
    readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    game_image<T extends Game_imageDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, Game_imageDefaultArgs<ExtArgs>>,
    ): Prisma__Game_imageClient<
      | $Result.GetResult<
          Prisma.$Game_imagePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<'Character', 'Int'>;
    readonly character_name: FieldRef<'Character', 'String'>;
    readonly icon_location: FieldRef<'Character', 'String'>;
    readonly xCoordinate: FieldRef<'Character', 'Int'>;
    readonly yCoordinate: FieldRef<'Character', 'Int'>;
    readonly imageId: FieldRef<'Character', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null;
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput;
  };

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null;
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput;
  };

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null;
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Characters to fetch.
     */
    orderBy?:
      | CharacterOrderByWithRelationInput
      | CharacterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Characters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[];
  };

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null;
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Characters to fetch.
     */
    orderBy?:
      | CharacterOrderByWithRelationInput
      | CharacterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Characters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[];
  };

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null;
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Characters to fetch.
     */
    orderBy?:
      | CharacterOrderByWithRelationInput
      | CharacterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Characters.
     */
    skip?: number;
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[];
  };

  /**
   * Character create
   */
  export type CharacterCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null;
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>;
  };

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null;
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Character update
   */
  export type CharacterUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null;
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>;
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput;
  };

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Characters.
     */
    data: XOR<
      CharacterUpdateManyMutationInput,
      CharacterUncheckedUpdateManyInput
    >;
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput;
    /**
     * Limit how many Characters to update.
     */
    limit?: number;
  };

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null;
    /**
     * The data used to update Characters.
     */
    data: XOR<
      CharacterUpdateManyMutationInput,
      CharacterUncheckedUpdateManyInput
    >;
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput;
    /**
     * Limit how many Characters to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null;
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput;
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>;
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>;
  };

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null;
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput;
  };

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput;
    /**
     * Limit how many Characters to delete.
     */
    limit?: number;
  };

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
    minutes: number | null;
    seconds: number | null;
    imageId: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
    minutes: number | null;
    seconds: number | null;
    imageId: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    username: string | null;
    minutes: number | null;
    seconds: number | null;
    imageId: number | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    username: string | null;
    minutes: number | null;
    seconds: number | null;
    imageId: number | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    minutes: number;
    seconds: number;
    imageId: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
    minutes?: true;
    seconds?: true;
    imageId?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
    minutes?: true;
    seconds?: true;
    imageId?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    minutes?: true;
    seconds?: true;
    imageId?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    minutes?: true;
    seconds?: true;
    imageId?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    minutes?: true;
    seconds?: true;
    imageId?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    username: string;
    minutes: number;
    seconds: number;
    imageId: number;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      minutes?: boolean;
      seconds?: boolean;
      imageId?: boolean;
      game_image?: boolean | Game_imageDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      minutes?: boolean;
      seconds?: boolean;
      imageId?: boolean;
      game_image?: boolean | Game_imageDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      minutes?: boolean;
      seconds?: boolean;
      imageId?: boolean;
      game_image?: boolean | Game_imageDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    username?: boolean;
    minutes?: boolean;
    seconds?: boolean;
    imageId?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'username' | 'minutes' | 'seconds' | 'imageId',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    game_image?: boolean | Game_imageDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    game_image?: boolean | Game_imageDefaultArgs<ExtArgs>;
  };
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    game_image?: boolean | Game_imageDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      game_image: Prisma.$Game_imagePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        username: string;
        minutes: number;
        seconds: number;
        imageId: number;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    game_image<T extends Game_imageDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, Game_imageDefaultArgs<ExtArgs>>,
    ): Prisma__Game_imageClient<
      | $Result.GetResult<
          Prisma.$Game_imagePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'Int'>;
    readonly username: FieldRef<'User', 'String'>;
    readonly minutes: FieldRef<'User', 'Int'>;
    readonly seconds: FieldRef<'User', 'Int'>;
    readonly imageId: FieldRef<'User', 'Int'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Game_image
   */

  export type AggregateGame_image = {
    _count: Game_imageCountAggregateOutputType | null;
    _avg: Game_imageAvgAggregateOutputType | null;
    _sum: Game_imageSumAggregateOutputType | null;
    _min: Game_imageMinAggregateOutputType | null;
    _max: Game_imageMaxAggregateOutputType | null;
  };

  export type Game_imageAvgAggregateOutputType = {
    id: number | null;
    width: number | null;
    height: number | null;
  };

  export type Game_imageSumAggregateOutputType = {
    id: number | null;
    width: number | null;
    height: number | null;
  };

  export type Game_imageMinAggregateOutputType = {
    id: number | null;
    image_location: string | null;
    title: string | null;
    width: number | null;
    height: number | null;
  };

  export type Game_imageMaxAggregateOutputType = {
    id: number | null;
    image_location: string | null;
    title: string | null;
    width: number | null;
    height: number | null;
  };

  export type Game_imageCountAggregateOutputType = {
    id: number;
    image_location: number;
    title: number;
    width: number;
    height: number;
    _all: number;
  };

  export type Game_imageAvgAggregateInputType = {
    id?: true;
    width?: true;
    height?: true;
  };

  export type Game_imageSumAggregateInputType = {
    id?: true;
    width?: true;
    height?: true;
  };

  export type Game_imageMinAggregateInputType = {
    id?: true;
    image_location?: true;
    title?: true;
    width?: true;
    height?: true;
  };

  export type Game_imageMaxAggregateInputType = {
    id?: true;
    image_location?: true;
    title?: true;
    width?: true;
    height?: true;
  };

  export type Game_imageCountAggregateInputType = {
    id?: true;
    image_location?: true;
    title?: true;
    width?: true;
    height?: true;
    _all?: true;
  };

  export type Game_imageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Game_image to aggregate.
     */
    where?: Game_imageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Game_images to fetch.
     */
    orderBy?:
      | Game_imageOrderByWithRelationInput
      | Game_imageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Game_imageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Game_images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Game_images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Game_images
     **/
    _count?: true | Game_imageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Game_imageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Game_imageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Game_imageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Game_imageMaxAggregateInputType;
  };

  export type GetGame_imageAggregateType<T extends Game_imageAggregateArgs> = {
    [P in keyof T & keyof AggregateGame_image]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame_image[P]>
      : GetScalarType<T[P], AggregateGame_image[P]>;
  };

  export type Game_imageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: Game_imageWhereInput;
    orderBy?:
      | Game_imageOrderByWithAggregationInput
      | Game_imageOrderByWithAggregationInput[];
    by: Game_imageScalarFieldEnum[] | Game_imageScalarFieldEnum;
    having?: Game_imageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Game_imageCountAggregateInputType | true;
    _avg?: Game_imageAvgAggregateInputType;
    _sum?: Game_imageSumAggregateInputType;
    _min?: Game_imageMinAggregateInputType;
    _max?: Game_imageMaxAggregateInputType;
  };

  export type Game_imageGroupByOutputType = {
    id: number;
    image_location: string;
    title: string;
    width: number;
    height: number;
    _count: Game_imageCountAggregateOutputType | null;
    _avg: Game_imageAvgAggregateOutputType | null;
    _sum: Game_imageSumAggregateOutputType | null;
    _min: Game_imageMinAggregateOutputType | null;
    _max: Game_imageMaxAggregateOutputType | null;
  };

  type GetGame_imageGroupByPayload<T extends Game_imageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<Game_imageGroupByOutputType, T['by']> & {
          [P in keyof T & keyof Game_imageGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Game_imageGroupByOutputType[P]>
            : GetScalarType<T[P], Game_imageGroupByOutputType[P]>;
        }
      >
    >;

  export type Game_imageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      image_location?: boolean;
      title?: boolean;
      width?: boolean;
      height?: boolean;
      characters?: boolean | Game_image$charactersArgs<ExtArgs>;
      game_leaders?: boolean | Game_image$game_leadersArgs<ExtArgs>;
      _count?: boolean | Game_imageCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['game_image']
  >;

  export type Game_imageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      image_location?: boolean;
      title?: boolean;
      width?: boolean;
      height?: boolean;
    },
    ExtArgs['result']['game_image']
  >;

  export type Game_imageSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      image_location?: boolean;
      title?: boolean;
      width?: boolean;
      height?: boolean;
    },
    ExtArgs['result']['game_image']
  >;

  export type Game_imageSelectScalar = {
    id?: boolean;
    image_location?: boolean;
    title?: boolean;
    width?: boolean;
    height?: boolean;
  };

  export type Game_imageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'image_location' | 'title' | 'width' | 'height',
    ExtArgs['result']['game_image']
  >;
  export type Game_imageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    characters?: boolean | Game_image$charactersArgs<ExtArgs>;
    game_leaders?: boolean | Game_image$game_leadersArgs<ExtArgs>;
    _count?: boolean | Game_imageCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type Game_imageIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type Game_imageIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $Game_imagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Game_image';
    objects: {
      characters: Prisma.$CharacterPayload<ExtArgs>[];
      game_leaders: Prisma.$UserPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        image_location: string;
        title: string;
        width: number;
        height: number;
      },
      ExtArgs['result']['game_image']
    >;
    composites: {};
  };

  type Game_imageGetPayload<
    S extends boolean | null | undefined | Game_imageDefaultArgs,
  > = $Result.GetResult<Prisma.$Game_imagePayload, S>;

  type Game_imageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    Game_imageFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: Game_imageCountAggregateInputType | true;
  };

  export interface Game_imageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Game_image'];
      meta: { name: 'Game_image' };
    };
    /**
     * Find zero or one Game_image that matches the filter.
     * @param {Game_imageFindUniqueArgs} args - Arguments to find a Game_image
     * @example
     * // Get one Game_image
     * const game_image = await prisma.game_image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Game_imageFindUniqueArgs>(
      args: SelectSubset<T, Game_imageFindUniqueArgs<ExtArgs>>,
    ): Prisma__Game_imageClient<
      $Result.GetResult<
        Prisma.$Game_imagePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Game_image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Game_imageFindUniqueOrThrowArgs} args - Arguments to find a Game_image
     * @example
     * // Get one Game_image
     * const game_image = await prisma.game_image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Game_imageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, Game_imageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__Game_imageClient<
      $Result.GetResult<
        Prisma.$Game_imagePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Game_image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_imageFindFirstArgs} args - Arguments to find a Game_image
     * @example
     * // Get one Game_image
     * const game_image = await prisma.game_image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Game_imageFindFirstArgs>(
      args?: SelectSubset<T, Game_imageFindFirstArgs<ExtArgs>>,
    ): Prisma__Game_imageClient<
      $Result.GetResult<
        Prisma.$Game_imagePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Game_image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_imageFindFirstOrThrowArgs} args - Arguments to find a Game_image
     * @example
     * // Get one Game_image
     * const game_image = await prisma.game_image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Game_imageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Game_imageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__Game_imageClient<
      $Result.GetResult<
        Prisma.$Game_imagePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Game_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_imageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Game_images
     * const game_images = await prisma.game_image.findMany()
     *
     * // Get first 10 Game_images
     * const game_images = await prisma.game_image.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const game_imageWithIdOnly = await prisma.game_image.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Game_imageFindManyArgs>(
      args?: SelectSubset<T, Game_imageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$Game_imagePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Game_image.
     * @param {Game_imageCreateArgs} args - Arguments to create a Game_image.
     * @example
     * // Create one Game_image
     * const Game_image = await prisma.game_image.create({
     *   data: {
     *     // ... data to create a Game_image
     *   }
     * })
     *
     */
    create<T extends Game_imageCreateArgs>(
      args: SelectSubset<T, Game_imageCreateArgs<ExtArgs>>,
    ): Prisma__Game_imageClient<
      $Result.GetResult<
        Prisma.$Game_imagePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Game_images.
     * @param {Game_imageCreateManyArgs} args - Arguments to create many Game_images.
     * @example
     * // Create many Game_images
     * const game_image = await prisma.game_image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Game_imageCreateManyArgs>(
      args?: SelectSubset<T, Game_imageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Game_images and returns the data saved in the database.
     * @param {Game_imageCreateManyAndReturnArgs} args - Arguments to create many Game_images.
     * @example
     * // Create many Game_images
     * const game_image = await prisma.game_image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Game_images and only return the `id`
     * const game_imageWithIdOnly = await prisma.game_image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Game_imageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, Game_imageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$Game_imagePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Game_image.
     * @param {Game_imageDeleteArgs} args - Arguments to delete one Game_image.
     * @example
     * // Delete one Game_image
     * const Game_image = await prisma.game_image.delete({
     *   where: {
     *     // ... filter to delete one Game_image
     *   }
     * })
     *
     */
    delete<T extends Game_imageDeleteArgs>(
      args: SelectSubset<T, Game_imageDeleteArgs<ExtArgs>>,
    ): Prisma__Game_imageClient<
      $Result.GetResult<
        Prisma.$Game_imagePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Game_image.
     * @param {Game_imageUpdateArgs} args - Arguments to update one Game_image.
     * @example
     * // Update one Game_image
     * const game_image = await prisma.game_image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Game_imageUpdateArgs>(
      args: SelectSubset<T, Game_imageUpdateArgs<ExtArgs>>,
    ): Prisma__Game_imageClient<
      $Result.GetResult<
        Prisma.$Game_imagePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Game_images.
     * @param {Game_imageDeleteManyArgs} args - Arguments to filter Game_images to delete.
     * @example
     * // Delete a few Game_images
     * const { count } = await prisma.game_image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Game_imageDeleteManyArgs>(
      args?: SelectSubset<T, Game_imageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Game_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_imageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Game_images
     * const game_image = await prisma.game_image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Game_imageUpdateManyArgs>(
      args: SelectSubset<T, Game_imageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Game_images and returns the data updated in the database.
     * @param {Game_imageUpdateManyAndReturnArgs} args - Arguments to update many Game_images.
     * @example
     * // Update many Game_images
     * const game_image = await prisma.game_image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Game_images and only return the `id`
     * const game_imageWithIdOnly = await prisma.game_image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends Game_imageUpdateManyAndReturnArgs>(
      args: SelectSubset<T, Game_imageUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$Game_imagePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Game_image.
     * @param {Game_imageUpsertArgs} args - Arguments to update or create a Game_image.
     * @example
     * // Update or create a Game_image
     * const game_image = await prisma.game_image.upsert({
     *   create: {
     *     // ... data to create a Game_image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game_image we want to update
     *   }
     * })
     */
    upsert<T extends Game_imageUpsertArgs>(
      args: SelectSubset<T, Game_imageUpsertArgs<ExtArgs>>,
    ): Prisma__Game_imageClient<
      $Result.GetResult<
        Prisma.$Game_imagePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Game_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_imageCountArgs} args - Arguments to filter Game_images to count.
     * @example
     * // Count the number of Game_images
     * const count = await prisma.game_image.count({
     *   where: {
     *     // ... the filter for the Game_images we want to count
     *   }
     * })
     **/
    count<T extends Game_imageCountArgs>(
      args?: Subset<T, Game_imageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Game_imageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Game_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_imageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Game_imageAggregateArgs>(
      args: Subset<T, Game_imageAggregateArgs>,
    ): Prisma.PrismaPromise<GetGame_imageAggregateType<T>>;

    /**
     * Group by Game_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_imageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends Game_imageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Game_imageGroupByArgs['orderBy'] }
        : { orderBy?: Game_imageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, Game_imageGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetGame_imageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Game_image model
     */
    readonly fields: Game_imageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game_image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Game_imageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    characters<T extends Game_image$charactersArgs<ExtArgs> = {}>(
      args?: Subset<T, Game_image$charactersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CharacterPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    game_leaders<T extends Game_image$game_leadersArgs<ExtArgs> = {}>(
      args?: Subset<T, Game_image$game_leadersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Game_image model
   */
  interface Game_imageFieldRefs {
    readonly id: FieldRef<'Game_image', 'Int'>;
    readonly image_location: FieldRef<'Game_image', 'String'>;
    readonly title: FieldRef<'Game_image', 'String'>;
    readonly width: FieldRef<'Game_image', 'Int'>;
    readonly height: FieldRef<'Game_image', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Game_image findUnique
   */
  export type Game_imageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game_image
     */
    select?: Game_imageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game_image
     */
    omit?: Game_imageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Game_imageInclude<ExtArgs> | null;
    /**
     * Filter, which Game_image to fetch.
     */
    where: Game_imageWhereUniqueInput;
  };

  /**
   * Game_image findUniqueOrThrow
   */
  export type Game_imageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game_image
     */
    select?: Game_imageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game_image
     */
    omit?: Game_imageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Game_imageInclude<ExtArgs> | null;
    /**
     * Filter, which Game_image to fetch.
     */
    where: Game_imageWhereUniqueInput;
  };

  /**
   * Game_image findFirst
   */
  export type Game_imageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game_image
     */
    select?: Game_imageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game_image
     */
    omit?: Game_imageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Game_imageInclude<ExtArgs> | null;
    /**
     * Filter, which Game_image to fetch.
     */
    where?: Game_imageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Game_images to fetch.
     */
    orderBy?:
      | Game_imageOrderByWithRelationInput
      | Game_imageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Game_images.
     */
    cursor?: Game_imageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Game_images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Game_images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Game_images.
     */
    distinct?: Game_imageScalarFieldEnum | Game_imageScalarFieldEnum[];
  };

  /**
   * Game_image findFirstOrThrow
   */
  export type Game_imageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game_image
     */
    select?: Game_imageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game_image
     */
    omit?: Game_imageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Game_imageInclude<ExtArgs> | null;
    /**
     * Filter, which Game_image to fetch.
     */
    where?: Game_imageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Game_images to fetch.
     */
    orderBy?:
      | Game_imageOrderByWithRelationInput
      | Game_imageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Game_images.
     */
    cursor?: Game_imageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Game_images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Game_images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Game_images.
     */
    distinct?: Game_imageScalarFieldEnum | Game_imageScalarFieldEnum[];
  };

  /**
   * Game_image findMany
   */
  export type Game_imageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game_image
     */
    select?: Game_imageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game_image
     */
    omit?: Game_imageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Game_imageInclude<ExtArgs> | null;
    /**
     * Filter, which Game_images to fetch.
     */
    where?: Game_imageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Game_images to fetch.
     */
    orderBy?:
      | Game_imageOrderByWithRelationInput
      | Game_imageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Game_images.
     */
    cursor?: Game_imageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Game_images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Game_images.
     */
    skip?: number;
    distinct?: Game_imageScalarFieldEnum | Game_imageScalarFieldEnum[];
  };

  /**
   * Game_image create
   */
  export type Game_imageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game_image
     */
    select?: Game_imageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game_image
     */
    omit?: Game_imageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Game_imageInclude<ExtArgs> | null;
    /**
     * The data needed to create a Game_image.
     */
    data: XOR<Game_imageCreateInput, Game_imageUncheckedCreateInput>;
  };

  /**
   * Game_image createMany
   */
  export type Game_imageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Game_images.
     */
    data: Game_imageCreateManyInput | Game_imageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Game_image createManyAndReturn
   */
  export type Game_imageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game_image
     */
    select?: Game_imageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Game_image
     */
    omit?: Game_imageOmit<ExtArgs> | null;
    /**
     * The data used to create many Game_images.
     */
    data: Game_imageCreateManyInput | Game_imageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Game_image update
   */
  export type Game_imageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game_image
     */
    select?: Game_imageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game_image
     */
    omit?: Game_imageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Game_imageInclude<ExtArgs> | null;
    /**
     * The data needed to update a Game_image.
     */
    data: XOR<Game_imageUpdateInput, Game_imageUncheckedUpdateInput>;
    /**
     * Choose, which Game_image to update.
     */
    where: Game_imageWhereUniqueInput;
  };

  /**
   * Game_image updateMany
   */
  export type Game_imageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Game_images.
     */
    data: XOR<
      Game_imageUpdateManyMutationInput,
      Game_imageUncheckedUpdateManyInput
    >;
    /**
     * Filter which Game_images to update
     */
    where?: Game_imageWhereInput;
    /**
     * Limit how many Game_images to update.
     */
    limit?: number;
  };

  /**
   * Game_image updateManyAndReturn
   */
  export type Game_imageUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game_image
     */
    select?: Game_imageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Game_image
     */
    omit?: Game_imageOmit<ExtArgs> | null;
    /**
     * The data used to update Game_images.
     */
    data: XOR<
      Game_imageUpdateManyMutationInput,
      Game_imageUncheckedUpdateManyInput
    >;
    /**
     * Filter which Game_images to update
     */
    where?: Game_imageWhereInput;
    /**
     * Limit how many Game_images to update.
     */
    limit?: number;
  };

  /**
   * Game_image upsert
   */
  export type Game_imageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game_image
     */
    select?: Game_imageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game_image
     */
    omit?: Game_imageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Game_imageInclude<ExtArgs> | null;
    /**
     * The filter to search for the Game_image to update in case it exists.
     */
    where: Game_imageWhereUniqueInput;
    /**
     * In case the Game_image found by the `where` argument doesn't exist, create a new Game_image with this data.
     */
    create: XOR<Game_imageCreateInput, Game_imageUncheckedCreateInput>;
    /**
     * In case the Game_image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Game_imageUpdateInput, Game_imageUncheckedUpdateInput>;
  };

  /**
   * Game_image delete
   */
  export type Game_imageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game_image
     */
    select?: Game_imageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game_image
     */
    omit?: Game_imageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Game_imageInclude<ExtArgs> | null;
    /**
     * Filter which Game_image to delete.
     */
    where: Game_imageWhereUniqueInput;
  };

  /**
   * Game_image deleteMany
   */
  export type Game_imageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Game_images to delete
     */
    where?: Game_imageWhereInput;
    /**
     * Limit how many Game_images to delete.
     */
    limit?: number;
  };

  /**
   * Game_image.characters
   */
  export type Game_image$charactersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null;
    where?: CharacterWhereInput;
    orderBy?:
      | CharacterOrderByWithRelationInput
      | CharacterOrderByWithRelationInput[];
    cursor?: CharacterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[];
  };

  /**
   * Game_image.game_leaders
   */
  export type Game_image$game_leadersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * Game_image without action
   */
  export type Game_imageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game_image
     */
    select?: Game_imageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game_image
     */
    omit?: Game_imageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Game_imageInclude<ExtArgs> | null;
  };

  /**
   * Model Data
   */

  export type AggregateData = {
    _count: DataCountAggregateOutputType | null;
    _avg: DataAvgAggregateOutputType | null;
    _sum: DataSumAggregateOutputType | null;
    _min: DataMinAggregateOutputType | null;
    _max: DataMaxAggregateOutputType | null;
  };

  export type DataAvgAggregateOutputType = {
    id: number | null;
    imageId: number | null;
    characterCount: number | null;
    foundCharacters: number | null;
  };

  export type DataSumAggregateOutputType = {
    id: number | null;
    imageId: number | null;
    characterCount: number | null;
    foundCharacters: number[];
  };

  export type DataMinAggregateOutputType = {
    id: number | null;
    user_id: string | null;
    startTime: Date | null;
    stopTime: Date | null;
    imageId: number | null;
    characterCount: number | null;
  };

  export type DataMaxAggregateOutputType = {
    id: number | null;
    user_id: string | null;
    startTime: Date | null;
    stopTime: Date | null;
    imageId: number | null;
    characterCount: number | null;
  };

  export type DataCountAggregateOutputType = {
    id: number;
    user_id: number;
    startTime: number;
    stopTime: number;
    imageId: number;
    characterCount: number;
    foundCharacters: number;
    _all: number;
  };

  export type DataAvgAggregateInputType = {
    id?: true;
    imageId?: true;
    characterCount?: true;
    foundCharacters?: true;
  };

  export type DataSumAggregateInputType = {
    id?: true;
    imageId?: true;
    characterCount?: true;
    foundCharacters?: true;
  };

  export type DataMinAggregateInputType = {
    id?: true;
    user_id?: true;
    startTime?: true;
    stopTime?: true;
    imageId?: true;
    characterCount?: true;
  };

  export type DataMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    startTime?: true;
    stopTime?: true;
    imageId?: true;
    characterCount?: true;
  };

  export type DataCountAggregateInputType = {
    id?: true;
    user_id?: true;
    startTime?: true;
    stopTime?: true;
    imageId?: true;
    characterCount?: true;
    foundCharacters?: true;
    _all?: true;
  };

  export type DataAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Data to aggregate.
     */
    where?: DataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: DataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Data.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Data
     **/
    _count?: true | DataCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: DataAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: DataSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DataMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DataMaxAggregateInputType;
  };

  export type GetDataAggregateType<T extends DataAggregateArgs> = {
    [P in keyof T & keyof AggregateData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData[P]>
      : GetScalarType<T[P], AggregateData[P]>;
  };

  export type DataGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DataWhereInput;
    orderBy?:
      | DataOrderByWithAggregationInput
      | DataOrderByWithAggregationInput[];
    by: DataScalarFieldEnum[] | DataScalarFieldEnum;
    having?: DataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DataCountAggregateInputType | true;
    _avg?: DataAvgAggregateInputType;
    _sum?: DataSumAggregateInputType;
    _min?: DataMinAggregateInputType;
    _max?: DataMaxAggregateInputType;
  };

  export type DataGroupByOutputType = {
    id: number;
    user_id: string;
    startTime: Date | null;
    stopTime: Date | null;
    imageId: number | null;
    characterCount: number | null;
    foundCharacters: number[];
    _count: DataCountAggregateOutputType | null;
    _avg: DataAvgAggregateOutputType | null;
    _sum: DataSumAggregateOutputType | null;
    _min: DataMinAggregateOutputType | null;
    _max: DataMaxAggregateOutputType | null;
  };

  type GetDataGroupByPayload<T extends DataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DataGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DataGroupByOutputType[P]>
          : GetScalarType<T[P], DataGroupByOutputType[P]>;
      }
    >
  >;

  export type DataSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      startTime?: boolean;
      stopTime?: boolean;
      imageId?: boolean;
      characterCount?: boolean;
      foundCharacters?: boolean;
    },
    ExtArgs['result']['data']
  >;

  export type DataSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      startTime?: boolean;
      stopTime?: boolean;
      imageId?: boolean;
      characterCount?: boolean;
      foundCharacters?: boolean;
    },
    ExtArgs['result']['data']
  >;

  export type DataSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      startTime?: boolean;
      stopTime?: boolean;
      imageId?: boolean;
      characterCount?: boolean;
      foundCharacters?: boolean;
    },
    ExtArgs['result']['data']
  >;

  export type DataSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    startTime?: boolean;
    stopTime?: boolean;
    imageId?: boolean;
    characterCount?: boolean;
    foundCharacters?: boolean;
  };

  export type DataOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'user_id'
    | 'startTime'
    | 'stopTime'
    | 'imageId'
    | 'characterCount'
    | 'foundCharacters',
    ExtArgs['result']['data']
  >;

  export type $DataPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Data';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        user_id: string;
        startTime: Date | null;
        stopTime: Date | null;
        imageId: number | null;
        characterCount: number | null;
        foundCharacters: number[];
      },
      ExtArgs['result']['data']
    >;
    composites: {};
  };

  type DataGetPayload<S extends boolean | null | undefined | DataDefaultArgs> =
    $Result.GetResult<Prisma.$DataPayload, S>;

  type DataCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<DataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DataCountAggregateInputType | true;
  };

  export interface DataDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Data'];
      meta: { name: 'Data' };
    };
    /**
     * Find zero or one Data that matches the filter.
     * @param {DataFindUniqueArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataFindUniqueArgs>(
      args: SelectSubset<T, DataFindUniqueArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataFindUniqueOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataFindUniqueOrThrowArgs>(
      args: SelectSubset<T, DataFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindFirstArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataFindFirstArgs>(
      args?: SelectSubset<T, DataFindFirstArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindFirstOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DataFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data
     * const data = await prisma.data.findMany()
     *
     * // Get first 10 Data
     * const data = await prisma.data.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dataWithIdOnly = await prisma.data.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DataFindManyArgs>(
      args?: SelectSubset<T, DataFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Data.
     * @param {DataCreateArgs} args - Arguments to create a Data.
     * @example
     * // Create one Data
     * const Data = await prisma.data.create({
     *   data: {
     *     // ... data to create a Data
     *   }
     * })
     *
     */
    create<T extends DataCreateArgs>(
      args: SelectSubset<T, DataCreateArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Data.
     * @param {DataCreateManyArgs} args - Arguments to create many Data.
     * @example
     * // Create many Data
     * const data = await prisma.data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DataCreateManyArgs>(
      args?: SelectSubset<T, DataCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Data and returns the data saved in the database.
     * @param {DataCreateManyAndReturnArgs} args - Arguments to create many Data.
     * @example
     * // Create many Data
     * const data = await prisma.data.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Data and only return the `id`
     * const dataWithIdOnly = await prisma.data.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DataCreateManyAndReturnArgs>(
      args?: SelectSubset<T, DataCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Data.
     * @param {DataDeleteArgs} args - Arguments to delete one Data.
     * @example
     * // Delete one Data
     * const Data = await prisma.data.delete({
     *   where: {
     *     // ... filter to delete one Data
     *   }
     * })
     *
     */
    delete<T extends DataDeleteArgs>(
      args: SelectSubset<T, DataDeleteArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Data.
     * @param {DataUpdateArgs} args - Arguments to update one Data.
     * @example
     * // Update one Data
     * const data = await prisma.data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DataUpdateArgs>(
      args: SelectSubset<T, DataUpdateArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Data.
     * @param {DataDeleteManyArgs} args - Arguments to filter Data to delete.
     * @example
     * // Delete a few Data
     * const { count } = await prisma.data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DataDeleteManyArgs>(
      args?: SelectSubset<T, DataDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data
     * const data = await prisma.data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DataUpdateManyArgs>(
      args: SelectSubset<T, DataUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Data and returns the data updated in the database.
     * @param {DataUpdateManyAndReturnArgs} args - Arguments to update many Data.
     * @example
     * // Update many Data
     * const data = await prisma.data.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Data and only return the `id`
     * const dataWithIdOnly = await prisma.data.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends DataUpdateManyAndReturnArgs>(
      args: SelectSubset<T, DataUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Data.
     * @param {DataUpsertArgs} args - Arguments to update or create a Data.
     * @example
     * // Update or create a Data
     * const data = await prisma.data.upsert({
     *   create: {
     *     // ... data to create a Data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data we want to update
     *   }
     * })
     */
    upsert<T extends DataUpsertArgs>(
      args: SelectSubset<T, DataUpsertArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataCountArgs} args - Arguments to filter Data to count.
     * @example
     * // Count the number of Data
     * const count = await prisma.data.count({
     *   where: {
     *     // ... the filter for the Data we want to count
     *   }
     * })
     **/
    count<T extends DataCountArgs>(
      args?: Subset<T, DataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DataAggregateArgs>(
      args: Subset<T, DataAggregateArgs>,
    ): Prisma.PrismaPromise<GetDataAggregateType<T>>;

    /**
     * Group by Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends DataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataGroupByArgs['orderBy'] }
        : { orderBy?: DataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, DataGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetDataGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Data model
     */
    readonly fields: DataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Data model
   */
  interface DataFieldRefs {
    readonly id: FieldRef<'Data', 'Int'>;
    readonly user_id: FieldRef<'Data', 'String'>;
    readonly startTime: FieldRef<'Data', 'DateTime'>;
    readonly stopTime: FieldRef<'Data', 'DateTime'>;
    readonly imageId: FieldRef<'Data', 'Int'>;
    readonly characterCount: FieldRef<'Data', 'Int'>;
    readonly foundCharacters: FieldRef<'Data', 'Int[]'>;
  }

  // Custom InputTypes
  /**
   * Data findUnique
   */
  export type DataFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Filter, which Data to fetch.
     */
    where: DataWhereUniqueInput;
  };

  /**
   * Data findUniqueOrThrow
   */
  export type DataFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Filter, which Data to fetch.
     */
    where: DataWhereUniqueInput;
  };

  /**
   * Data findFirst
   */
  export type DataFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Filter, which Data to fetch.
     */
    where?: DataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Data.
     */
    cursor?: DataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Data.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Data.
     */
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[];
  };

  /**
   * Data findFirstOrThrow
   */
  export type DataFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Filter, which Data to fetch.
     */
    where?: DataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Data.
     */
    cursor?: DataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Data.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Data.
     */
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[];
  };

  /**
   * Data findMany
   */
  export type DataFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Filter, which Data to fetch.
     */
    where?: DataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Data.
     */
    cursor?: DataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Data.
     */
    skip?: number;
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[];
  };

  /**
   * Data create
   */
  export type DataCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * The data needed to create a Data.
     */
    data: XOR<DataCreateInput, DataUncheckedCreateInput>;
  };

  /**
   * Data createMany
   */
  export type DataCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Data.
     */
    data: DataCreateManyInput | DataCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Data createManyAndReturn
   */
  export type DataCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * The data used to create many Data.
     */
    data: DataCreateManyInput | DataCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Data update
   */
  export type DataUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * The data needed to update a Data.
     */
    data: XOR<DataUpdateInput, DataUncheckedUpdateInput>;
    /**
     * Choose, which Data to update.
     */
    where: DataWhereUniqueInput;
  };

  /**
   * Data updateMany
   */
  export type DataUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Data.
     */
    data: XOR<DataUpdateManyMutationInput, DataUncheckedUpdateManyInput>;
    /**
     * Filter which Data to update
     */
    where?: DataWhereInput;
    /**
     * Limit how many Data to update.
     */
    limit?: number;
  };

  /**
   * Data updateManyAndReturn
   */
  export type DataUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * The data used to update Data.
     */
    data: XOR<DataUpdateManyMutationInput, DataUncheckedUpdateManyInput>;
    /**
     * Filter which Data to update
     */
    where?: DataWhereInput;
    /**
     * Limit how many Data to update.
     */
    limit?: number;
  };

  /**
   * Data upsert
   */
  export type DataUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * The filter to search for the Data to update in case it exists.
     */
    where: DataWhereUniqueInput;
    /**
     * In case the Data found by the `where` argument doesn't exist, create a new Data with this data.
     */
    create: XOR<DataCreateInput, DataUncheckedCreateInput>;
    /**
     * In case the Data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataUpdateInput, DataUncheckedUpdateInput>;
  };

  /**
   * Data delete
   */
  export type DataDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Filter which Data to delete.
     */
    where: DataWhereUniqueInput;
  };

  /**
   * Data deleteMany
   */
  export type DataDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Data to delete
     */
    where?: DataWhereInput;
    /**
     * Limit how many Data to delete.
     */
    limit?: number;
  };

  /**
   * Data without action
   */
  export type DataDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
  };

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
  };

  export type SessionMinAggregateOutputType = {
    id: string | null;
    sid: string | null;
    data: string | null;
    expiresAt: Date | null;
  };

  export type SessionMaxAggregateOutputType = {
    id: string | null;
    sid: string | null;
    data: string | null;
    expiresAt: Date | null;
  };

  export type SessionCountAggregateOutputType = {
    id: number;
    sid: number;
    data: number;
    expiresAt: number;
    _all: number;
  };

  export type SessionMinAggregateInputType = {
    id?: true;
    sid?: true;
    data?: true;
    expiresAt?: true;
  };

  export type SessionMaxAggregateInputType = {
    id?: true;
    sid?: true;
    data?: true;
    expiresAt?: true;
  };

  export type SessionCountAggregateInputType = {
    id?: true;
    sid?: true;
    data?: true;
    expiresAt?: true;
    _all?: true;
  };

  export type SessionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Sessions
     **/
    _count?: true | SessionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SessionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SessionMaxAggregateInputType;
  };

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
    [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>;
  };

  export type SessionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SessionWhereInput;
    orderBy?:
      | SessionOrderByWithAggregationInput
      | SessionOrderByWithAggregationInput[];
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum;
    having?: SessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SessionCountAggregateInputType | true;
    _min?: SessionMinAggregateInputType;
    _max?: SessionMaxAggregateInputType;
  };

  export type SessionGroupByOutputType = {
    id: string;
    sid: string;
    data: string;
    expiresAt: Date;
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
  };

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SessionGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SessionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>;
        }
      >
    >;

  export type SessionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sid?: boolean;
      data?: boolean;
      expiresAt?: boolean;
    },
    ExtArgs['result']['session']
  >;

  export type SessionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sid?: boolean;
      data?: boolean;
      expiresAt?: boolean;
    },
    ExtArgs['result']['session']
  >;

  export type SessionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sid?: boolean;
      data?: boolean;
      expiresAt?: boolean;
    },
    ExtArgs['result']['session']
  >;

  export type SessionSelectScalar = {
    id?: boolean;
    sid?: boolean;
    data?: boolean;
    expiresAt?: boolean;
  };

  export type SessionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'sid' | 'data' | 'expiresAt',
    ExtArgs['result']['session']
  >;

  export type $SessionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Session';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        sid: string;
        data: string;
        expiresAt: Date;
      },
      ExtArgs['result']['session']
    >;
    composites: {};
  };

  type SessionGetPayload<
    S extends boolean | null | undefined | SessionDefaultArgs,
  > = $Result.GetResult<Prisma.$SessionPayload, S>;

  type SessionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SessionCountAggregateInputType | true;
  };

  export interface SessionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Session'];
      meta: { name: 'Session' };
    };
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     *
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     *
     */
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     *
     */
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
     **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SessionAggregateArgs>(
      args: Subset<T, SessionAggregateArgs>,
    ): Prisma.PrismaPromise<GetSessionAggregateType<T>>;

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSessionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Session model
     */
    readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<'Session', 'String'>;
    readonly sid: FieldRef<'Session', 'String'>;
    readonly data: FieldRef<'Session', 'String'>;
    readonly expiresAt: FieldRef<'Session', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * Session create
   */
  export type SessionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>;
  };

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Session update
   */
  export type SessionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>;
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>;
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput;
    /**
     * Limit how many Sessions to update.
     */
    limit?: number;
  };

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>;
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput;
    /**
     * Limit how many Sessions to update.
     */
    limit?: number;
  };

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput;
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>;
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>;
  };

  /**
   * Session delete
   */
  export type SessionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput;
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number;
  };

  /**
   * Session without action
   */
  export type SessionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CharacterScalarFieldEnum: {
    id: 'id';
    character_name: 'character_name';
    icon_location: 'icon_location';
    xCoordinate: 'xCoordinate';
    yCoordinate: 'yCoordinate';
    imageId: 'imageId';
  };

  export type CharacterScalarFieldEnum =
    (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    username: 'username';
    minutes: 'minutes';
    seconds: 'seconds';
    imageId: 'imageId';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const Game_imageScalarFieldEnum: {
    id: 'id';
    image_location: 'image_location';
    title: 'title';
    width: 'width';
    height: 'height';
  };

  export type Game_imageScalarFieldEnum =
    (typeof Game_imageScalarFieldEnum)[keyof typeof Game_imageScalarFieldEnum];

  export const DataScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    startTime: 'startTime';
    stopTime: 'stopTime';
    imageId: 'imageId';
    characterCount: 'characterCount';
    foundCharacters: 'foundCharacters';
  };

  export type DataScalarFieldEnum =
    (typeof DataScalarFieldEnum)[keyof typeof DataScalarFieldEnum];

  export const SessionScalarFieldEnum: {
    id: 'id';
    sid: 'sid';
    data: 'data';
    expiresAt: 'expiresAt';
  };

  export type SessionScalarFieldEnum =
    (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const CharacterOrderByRelevanceFieldEnum: {
    character_name: 'character_name';
    icon_location: 'icon_location';
  };

  export type CharacterOrderByRelevanceFieldEnum =
    (typeof CharacterOrderByRelevanceFieldEnum)[keyof typeof CharacterOrderByRelevanceFieldEnum];

  export const UserOrderByRelevanceFieldEnum: {
    username: 'username';
  };

  export type UserOrderByRelevanceFieldEnum =
    (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];

  export const Game_imageOrderByRelevanceFieldEnum: {
    image_location: 'image_location';
    title: 'title';
  };

  export type Game_imageOrderByRelevanceFieldEnum =
    (typeof Game_imageOrderByRelevanceFieldEnum)[keyof typeof Game_imageOrderByRelevanceFieldEnum];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const DataOrderByRelevanceFieldEnum: {
    user_id: 'user_id';
  };

  export type DataOrderByRelevanceFieldEnum =
    (typeof DataOrderByRelevanceFieldEnum)[keyof typeof DataOrderByRelevanceFieldEnum];

  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id';
    sid: 'sid';
    data: 'data';
  };

  export type SessionOrderByRelevanceFieldEnum =
    (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[];
    OR?: CharacterWhereInput[];
    NOT?: CharacterWhereInput | CharacterWhereInput[];
    id?: IntFilter<'Character'> | number;
    character_name?: StringFilter<'Character'> | string;
    icon_location?: StringFilter<'Character'> | string;
    xCoordinate?: IntFilter<'Character'> | number;
    yCoordinate?: IntFilter<'Character'> | number;
    imageId?: IntFilter<'Character'> | number;
    game_image?: XOR<Game_imageScalarRelationFilter, Game_imageWhereInput>;
  };

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder;
    character_name?: SortOrder;
    icon_location?: SortOrder;
    xCoordinate?: SortOrder;
    yCoordinate?: SortOrder;
    imageId?: SortOrder;
    game_image?: Game_imageOrderByWithRelationInput;
    _relevance?: CharacterOrderByRelevanceInput;
  };

  export type CharacterWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: CharacterWhereInput | CharacterWhereInput[];
      OR?: CharacterWhereInput[];
      NOT?: CharacterWhereInput | CharacterWhereInput[];
      character_name?: StringFilter<'Character'> | string;
      icon_location?: StringFilter<'Character'> | string;
      xCoordinate?: IntFilter<'Character'> | number;
      yCoordinate?: IntFilter<'Character'> | number;
      imageId?: IntFilter<'Character'> | number;
      game_image?: XOR<Game_imageScalarRelationFilter, Game_imageWhereInput>;
    },
    'id'
  >;

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder;
    character_name?: SortOrder;
    icon_location?: SortOrder;
    xCoordinate?: SortOrder;
    yCoordinate?: SortOrder;
    imageId?: SortOrder;
    _count?: CharacterCountOrderByAggregateInput;
    _avg?: CharacterAvgOrderByAggregateInput;
    _max?: CharacterMaxOrderByAggregateInput;
    _min?: CharacterMinOrderByAggregateInput;
    _sum?: CharacterSumOrderByAggregateInput;
  };

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?:
      | CharacterScalarWhereWithAggregatesInput
      | CharacterScalarWhereWithAggregatesInput[];
    OR?: CharacterScalarWhereWithAggregatesInput[];
    NOT?:
      | CharacterScalarWhereWithAggregatesInput
      | CharacterScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Character'> | number;
    character_name?: StringWithAggregatesFilter<'Character'> | string;
    icon_location?: StringWithAggregatesFilter<'Character'> | string;
    xCoordinate?: IntWithAggregatesFilter<'Character'> | number;
    yCoordinate?: IntWithAggregatesFilter<'Character'> | number;
    imageId?: IntWithAggregatesFilter<'Character'> | number;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<'User'> | number;
    username?: StringFilter<'User'> | string;
    minutes?: IntFilter<'User'> | number;
    seconds?: IntFilter<'User'> | number;
    imageId?: IntFilter<'User'> | number;
    game_image?: XOR<Game_imageScalarRelationFilter, Game_imageWhereInput>;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    username?: SortOrder;
    minutes?: SortOrder;
    seconds?: SortOrder;
    imageId?: SortOrder;
    game_image?: Game_imageOrderByWithRelationInput;
    _relevance?: UserOrderByRelevanceInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      username?: StringFilter<'User'> | string;
      minutes?: IntFilter<'User'> | number;
      seconds?: IntFilter<'User'> | number;
      imageId?: IntFilter<'User'> | number;
      game_image?: XOR<Game_imageScalarRelationFilter, Game_imageWhereInput>;
    },
    'id'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    username?: SortOrder;
    minutes?: SortOrder;
    seconds?: SortOrder;
    imageId?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'User'> | number;
    username?: StringWithAggregatesFilter<'User'> | string;
    minutes?: IntWithAggregatesFilter<'User'> | number;
    seconds?: IntWithAggregatesFilter<'User'> | number;
    imageId?: IntWithAggregatesFilter<'User'> | number;
  };

  export type Game_imageWhereInput = {
    AND?: Game_imageWhereInput | Game_imageWhereInput[];
    OR?: Game_imageWhereInput[];
    NOT?: Game_imageWhereInput | Game_imageWhereInput[];
    id?: IntFilter<'Game_image'> | number;
    image_location?: StringFilter<'Game_image'> | string;
    title?: StringFilter<'Game_image'> | string;
    width?: IntFilter<'Game_image'> | number;
    height?: IntFilter<'Game_image'> | number;
    characters?: CharacterListRelationFilter;
    game_leaders?: UserListRelationFilter;
  };

  export type Game_imageOrderByWithRelationInput = {
    id?: SortOrder;
    image_location?: SortOrder;
    title?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    characters?: CharacterOrderByRelationAggregateInput;
    game_leaders?: UserOrderByRelationAggregateInput;
    _relevance?: Game_imageOrderByRelevanceInput;
  };

  export type Game_imageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: Game_imageWhereInput | Game_imageWhereInput[];
      OR?: Game_imageWhereInput[];
      NOT?: Game_imageWhereInput | Game_imageWhereInput[];
      image_location?: StringFilter<'Game_image'> | string;
      title?: StringFilter<'Game_image'> | string;
      width?: IntFilter<'Game_image'> | number;
      height?: IntFilter<'Game_image'> | number;
      characters?: CharacterListRelationFilter;
      game_leaders?: UserListRelationFilter;
    },
    'id'
  >;

  export type Game_imageOrderByWithAggregationInput = {
    id?: SortOrder;
    image_location?: SortOrder;
    title?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    _count?: Game_imageCountOrderByAggregateInput;
    _avg?: Game_imageAvgOrderByAggregateInput;
    _max?: Game_imageMaxOrderByAggregateInput;
    _min?: Game_imageMinOrderByAggregateInput;
    _sum?: Game_imageSumOrderByAggregateInput;
  };

  export type Game_imageScalarWhereWithAggregatesInput = {
    AND?:
      | Game_imageScalarWhereWithAggregatesInput
      | Game_imageScalarWhereWithAggregatesInput[];
    OR?: Game_imageScalarWhereWithAggregatesInput[];
    NOT?:
      | Game_imageScalarWhereWithAggregatesInput
      | Game_imageScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Game_image'> | number;
    image_location?: StringWithAggregatesFilter<'Game_image'> | string;
    title?: StringWithAggregatesFilter<'Game_image'> | string;
    width?: IntWithAggregatesFilter<'Game_image'> | number;
    height?: IntWithAggregatesFilter<'Game_image'> | number;
  };

  export type DataWhereInput = {
    AND?: DataWhereInput | DataWhereInput[];
    OR?: DataWhereInput[];
    NOT?: DataWhereInput | DataWhereInput[];
    id?: IntFilter<'Data'> | number;
    user_id?: StringFilter<'Data'> | string;
    startTime?: DateTimeNullableFilter<'Data'> | Date | string | null;
    stopTime?: DateTimeNullableFilter<'Data'> | Date | string | null;
    imageId?: IntNullableFilter<'Data'> | number | null;
    characterCount?: IntNullableFilter<'Data'> | number | null;
    foundCharacters?: IntNullableListFilter<'Data'>;
  };

  export type DataOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    startTime?: SortOrderInput | SortOrder;
    stopTime?: SortOrderInput | SortOrder;
    imageId?: SortOrderInput | SortOrder;
    characterCount?: SortOrderInput | SortOrder;
    foundCharacters?: SortOrder;
    _relevance?: DataOrderByRelevanceInput;
  };

  export type DataWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      user_id?: string;
      foundCharacters?: number[];
      AND?: DataWhereInput | DataWhereInput[];
      OR?: DataWhereInput[];
      NOT?: DataWhereInput | DataWhereInput[];
      startTime?: DateTimeNullableFilter<'Data'> | Date | string | null;
      stopTime?: DateTimeNullableFilter<'Data'> | Date | string | null;
      imageId?: IntNullableFilter<'Data'> | number | null;
      characterCount?: IntNullableFilter<'Data'> | number | null;
    },
    'id' | 'user_id' | 'foundCharacters'
  >;

  export type DataOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    startTime?: SortOrderInput | SortOrder;
    stopTime?: SortOrderInput | SortOrder;
    imageId?: SortOrderInput | SortOrder;
    characterCount?: SortOrderInput | SortOrder;
    foundCharacters?: SortOrder;
    _count?: DataCountOrderByAggregateInput;
    _avg?: DataAvgOrderByAggregateInput;
    _max?: DataMaxOrderByAggregateInput;
    _min?: DataMinOrderByAggregateInput;
    _sum?: DataSumOrderByAggregateInput;
  };

  export type DataScalarWhereWithAggregatesInput = {
    AND?:
      | DataScalarWhereWithAggregatesInput
      | DataScalarWhereWithAggregatesInput[];
    OR?: DataScalarWhereWithAggregatesInput[];
    NOT?:
      | DataScalarWhereWithAggregatesInput
      | DataScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Data'> | number;
    user_id?: StringWithAggregatesFilter<'Data'> | string;
    startTime?:
      | DateTimeNullableWithAggregatesFilter<'Data'>
      | Date
      | string
      | null;
    stopTime?:
      | DateTimeNullableWithAggregatesFilter<'Data'>
      | Date
      | string
      | null;
    imageId?: IntNullableWithAggregatesFilter<'Data'> | number | null;
    characterCount?: IntNullableWithAggregatesFilter<'Data'> | number | null;
    foundCharacters?: IntNullableListFilter<'Data'>;
  };

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[];
    OR?: SessionWhereInput[];
    NOT?: SessionWhereInput | SessionWhereInput[];
    id?: StringFilter<'Session'> | string;
    sid?: StringFilter<'Session'> | string;
    data?: StringFilter<'Session'> | string;
    expiresAt?: DateTimeFilter<'Session'> | Date | string;
  };

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder;
    sid?: SortOrder;
    data?: SortOrder;
    expiresAt?: SortOrder;
    _relevance?: SessionOrderByRelevanceInput;
  };

  export type SessionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      sid?: string;
      AND?: SessionWhereInput | SessionWhereInput[];
      OR?: SessionWhereInput[];
      NOT?: SessionWhereInput | SessionWhereInput[];
      data?: StringFilter<'Session'> | string;
      expiresAt?: DateTimeFilter<'Session'> | Date | string;
    },
    'id' | 'sid'
  >;

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder;
    sid?: SortOrder;
    data?: SortOrder;
    expiresAt?: SortOrder;
    _count?: SessionCountOrderByAggregateInput;
    _max?: SessionMaxOrderByAggregateInput;
    _min?: SessionMinOrderByAggregateInput;
  };

  export type SessionScalarWhereWithAggregatesInput = {
    AND?:
      | SessionScalarWhereWithAggregatesInput
      | SessionScalarWhereWithAggregatesInput[];
    OR?: SessionScalarWhereWithAggregatesInput[];
    NOT?:
      | SessionScalarWhereWithAggregatesInput
      | SessionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Session'> | string;
    sid?: StringWithAggregatesFilter<'Session'> | string;
    data?: StringWithAggregatesFilter<'Session'> | string;
    expiresAt?: DateTimeWithAggregatesFilter<'Session'> | Date | string;
  };

  export type CharacterCreateInput = {
    character_name: string;
    icon_location: string;
    xCoordinate: number;
    yCoordinate: number;
    game_image: Game_imageCreateNestedOneWithoutCharactersInput;
  };

  export type CharacterUncheckedCreateInput = {
    id?: number;
    character_name: string;
    icon_location: string;
    xCoordinate: number;
    yCoordinate: number;
    imageId: number;
  };

  export type CharacterUpdateInput = {
    character_name?: StringFieldUpdateOperationsInput | string;
    icon_location?: StringFieldUpdateOperationsInput | string;
    xCoordinate?: IntFieldUpdateOperationsInput | number;
    yCoordinate?: IntFieldUpdateOperationsInput | number;
    game_image?: Game_imageUpdateOneRequiredWithoutCharactersNestedInput;
  };

  export type CharacterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    character_name?: StringFieldUpdateOperationsInput | string;
    icon_location?: StringFieldUpdateOperationsInput | string;
    xCoordinate?: IntFieldUpdateOperationsInput | number;
    yCoordinate?: IntFieldUpdateOperationsInput | number;
    imageId?: IntFieldUpdateOperationsInput | number;
  };

  export type CharacterCreateManyInput = {
    id?: number;
    character_name: string;
    icon_location: string;
    xCoordinate: number;
    yCoordinate: number;
    imageId: number;
  };

  export type CharacterUpdateManyMutationInput = {
    character_name?: StringFieldUpdateOperationsInput | string;
    icon_location?: StringFieldUpdateOperationsInput | string;
    xCoordinate?: IntFieldUpdateOperationsInput | number;
    yCoordinate?: IntFieldUpdateOperationsInput | number;
  };

  export type CharacterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    character_name?: StringFieldUpdateOperationsInput | string;
    icon_location?: StringFieldUpdateOperationsInput | string;
    xCoordinate?: IntFieldUpdateOperationsInput | number;
    yCoordinate?: IntFieldUpdateOperationsInput | number;
    imageId?: IntFieldUpdateOperationsInput | number;
  };

  export type UserCreateInput = {
    username: string;
    minutes: number;
    seconds: number;
    game_image: Game_imageCreateNestedOneWithoutGame_leadersInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    username: string;
    minutes: number;
    seconds: number;
    imageId: number;
  };

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string;
    minutes?: IntFieldUpdateOperationsInput | number;
    seconds?: IntFieldUpdateOperationsInput | number;
    game_image?: Game_imageUpdateOneRequiredWithoutGame_leadersNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    minutes?: IntFieldUpdateOperationsInput | number;
    seconds?: IntFieldUpdateOperationsInput | number;
    imageId?: IntFieldUpdateOperationsInput | number;
  };

  export type UserCreateManyInput = {
    id?: number;
    username: string;
    minutes: number;
    seconds: number;
    imageId: number;
  };

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string;
    minutes?: IntFieldUpdateOperationsInput | number;
    seconds?: IntFieldUpdateOperationsInput | number;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    minutes?: IntFieldUpdateOperationsInput | number;
    seconds?: IntFieldUpdateOperationsInput | number;
    imageId?: IntFieldUpdateOperationsInput | number;
  };

  export type Game_imageCreateInput = {
    image_location: string;
    title: string;
    width: number;
    height: number;
    characters?: CharacterCreateNestedManyWithoutGame_imageInput;
    game_leaders?: UserCreateNestedManyWithoutGame_imageInput;
  };

  export type Game_imageUncheckedCreateInput = {
    id?: number;
    image_location: string;
    title: string;
    width: number;
    height: number;
    characters?: CharacterUncheckedCreateNestedManyWithoutGame_imageInput;
    game_leaders?: UserUncheckedCreateNestedManyWithoutGame_imageInput;
  };

  export type Game_imageUpdateInput = {
    image_location?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    characters?: CharacterUpdateManyWithoutGame_imageNestedInput;
    game_leaders?: UserUpdateManyWithoutGame_imageNestedInput;
  };

  export type Game_imageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    image_location?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    characters?: CharacterUncheckedUpdateManyWithoutGame_imageNestedInput;
    game_leaders?: UserUncheckedUpdateManyWithoutGame_imageNestedInput;
  };

  export type Game_imageCreateManyInput = {
    id?: number;
    image_location: string;
    title: string;
    width: number;
    height: number;
  };

  export type Game_imageUpdateManyMutationInput = {
    image_location?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
  };

  export type Game_imageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    image_location?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
  };

  export type DataCreateInput = {
    user_id: string;
    startTime?: Date | string | null;
    stopTime?: Date | string | null;
    imageId?: number | null;
    characterCount?: number | null;
    foundCharacters?: DataCreatefoundCharactersInput | number[];
  };

  export type DataUncheckedCreateInput = {
    id?: number;
    user_id: string;
    startTime?: Date | string | null;
    stopTime?: Date | string | null;
    imageId?: number | null;
    characterCount?: number | null;
    foundCharacters?: DataCreatefoundCharactersInput | number[];
  };

  export type DataUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string;
    startTime?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    stopTime?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    imageId?: NullableIntFieldUpdateOperationsInput | number | null;
    characterCount?: NullableIntFieldUpdateOperationsInput | number | null;
    foundCharacters?: DataUpdatefoundCharactersInput | number[];
  };

  export type DataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    startTime?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    stopTime?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    imageId?: NullableIntFieldUpdateOperationsInput | number | null;
    characterCount?: NullableIntFieldUpdateOperationsInput | number | null;
    foundCharacters?: DataUpdatefoundCharactersInput | number[];
  };

  export type DataCreateManyInput = {
    id?: number;
    user_id: string;
    startTime?: Date | string | null;
    stopTime?: Date | string | null;
    imageId?: number | null;
    characterCount?: number | null;
    foundCharacters?: DataCreatefoundCharactersInput | number[];
  };

  export type DataUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string;
    startTime?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    stopTime?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    imageId?: NullableIntFieldUpdateOperationsInput | number | null;
    characterCount?: NullableIntFieldUpdateOperationsInput | number | null;
    foundCharacters?: DataUpdatefoundCharactersInput | number[];
  };

  export type DataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    startTime?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    stopTime?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    imageId?: NullableIntFieldUpdateOperationsInput | number | null;
    characterCount?: NullableIntFieldUpdateOperationsInput | number | null;
    foundCharacters?: DataUpdatefoundCharactersInput | number[];
  };

  export type SessionCreateInput = {
    id: string;
    sid: string;
    data: string;
    expiresAt: Date | string;
  };

  export type SessionUncheckedCreateInput = {
    id: string;
    sid: string;
    data: string;
    expiresAt: Date | string;
  };

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sid?: StringFieldUpdateOperationsInput | string;
    data?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sid?: StringFieldUpdateOperationsInput | string;
    data?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionCreateManyInput = {
    id: string;
    sid: string;
    data: string;
    expiresAt: Date | string;
  };

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sid?: StringFieldUpdateOperationsInput | string;
    data?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sid?: StringFieldUpdateOperationsInput | string;
    data?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type Game_imageScalarRelationFilter = {
    is?: Game_imageWhereInput;
    isNot?: Game_imageWhereInput;
  };

  export type CharacterOrderByRelevanceInput = {
    fields:
      | CharacterOrderByRelevanceFieldEnum
      | CharacterOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder;
    character_name?: SortOrder;
    icon_location?: SortOrder;
    xCoordinate?: SortOrder;
    yCoordinate?: SortOrder;
    imageId?: SortOrder;
  };

  export type CharacterAvgOrderByAggregateInput = {
    id?: SortOrder;
    xCoordinate?: SortOrder;
    yCoordinate?: SortOrder;
    imageId?: SortOrder;
  };

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder;
    character_name?: SortOrder;
    icon_location?: SortOrder;
    xCoordinate?: SortOrder;
    yCoordinate?: SortOrder;
    imageId?: SortOrder;
  };

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder;
    character_name?: SortOrder;
    icon_location?: SortOrder;
    xCoordinate?: SortOrder;
    yCoordinate?: SortOrder;
    imageId?: SortOrder;
  };

  export type CharacterSumOrderByAggregateInput = {
    id?: SortOrder;
    xCoordinate?: SortOrder;
    yCoordinate?: SortOrder;
    imageId?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    minutes?: SortOrder;
    seconds?: SortOrder;
    imageId?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
    minutes?: SortOrder;
    seconds?: SortOrder;
    imageId?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    minutes?: SortOrder;
    seconds?: SortOrder;
    imageId?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    minutes?: SortOrder;
    seconds?: SortOrder;
    imageId?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
    minutes?: SortOrder;
    seconds?: SortOrder;
    imageId?: SortOrder;
  };

  export type CharacterListRelationFilter = {
    every?: CharacterWhereInput;
    some?: CharacterWhereInput;
    none?: CharacterWhereInput;
  };

  export type UserListRelationFilter = {
    every?: UserWhereInput;
    some?: UserWhereInput;
    none?: UserWhereInput;
  };

  export type CharacterOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type Game_imageOrderByRelevanceInput = {
    fields:
      | Game_imageOrderByRelevanceFieldEnum
      | Game_imageOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type Game_imageCountOrderByAggregateInput = {
    id?: SortOrder;
    image_location?: SortOrder;
    title?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
  };

  export type Game_imageAvgOrderByAggregateInput = {
    id?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
  };

  export type Game_imageMaxOrderByAggregateInput = {
    id?: SortOrder;
    image_location?: SortOrder;
    title?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
  };

  export type Game_imageMinOrderByAggregateInput = {
    id?: SortOrder;
    image_location?: SortOrder;
    title?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
  };

  export type Game_imageSumOrderByAggregateInput = {
    id?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    has?: number | IntFieldRefInput<$PrismaModel> | null;
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>;
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type DataOrderByRelevanceInput = {
    fields: DataOrderByRelevanceFieldEnum | DataOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type DataCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    startTime?: SortOrder;
    stopTime?: SortOrder;
    imageId?: SortOrder;
    characterCount?: SortOrder;
    foundCharacters?: SortOrder;
  };

  export type DataAvgOrderByAggregateInput = {
    id?: SortOrder;
    imageId?: SortOrder;
    characterCount?: SortOrder;
    foundCharacters?: SortOrder;
  };

  export type DataMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    startTime?: SortOrder;
    stopTime?: SortOrder;
    imageId?: SortOrder;
    characterCount?: SortOrder;
  };

  export type DataMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    startTime?: SortOrder;
    stopTime?: SortOrder;
    imageId?: SortOrder;
    characterCount?: SortOrder;
  };

  export type DataSumOrderByAggregateInput = {
    id?: SortOrder;
    imageId?: SortOrder;
    characterCount?: SortOrder;
    foundCharacters?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type SessionOrderByRelevanceInput = {
    fields:
      | SessionOrderByRelevanceFieldEnum
      | SessionOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder;
    sid?: SortOrder;
    data?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder;
    sid?: SortOrder;
    data?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder;
    sid?: SortOrder;
    data?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type Game_imageCreateNestedOneWithoutCharactersInput = {
    create?: XOR<
      Game_imageCreateWithoutCharactersInput,
      Game_imageUncheckedCreateWithoutCharactersInput
    >;
    connectOrCreate?: Game_imageCreateOrConnectWithoutCharactersInput;
    connect?: Game_imageWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type Game_imageUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<
      Game_imageCreateWithoutCharactersInput,
      Game_imageUncheckedCreateWithoutCharactersInput
    >;
    connectOrCreate?: Game_imageCreateOrConnectWithoutCharactersInput;
    upsert?: Game_imageUpsertWithoutCharactersInput;
    connect?: Game_imageWhereUniqueInput;
    update?: XOR<
      XOR<
        Game_imageUpdateToOneWithWhereWithoutCharactersInput,
        Game_imageUpdateWithoutCharactersInput
      >,
      Game_imageUncheckedUpdateWithoutCharactersInput
    >;
  };

  export type Game_imageCreateNestedOneWithoutGame_leadersInput = {
    create?: XOR<
      Game_imageCreateWithoutGame_leadersInput,
      Game_imageUncheckedCreateWithoutGame_leadersInput
    >;
    connectOrCreate?: Game_imageCreateOrConnectWithoutGame_leadersInput;
    connect?: Game_imageWhereUniqueInput;
  };

  export type Game_imageUpdateOneRequiredWithoutGame_leadersNestedInput = {
    create?: XOR<
      Game_imageCreateWithoutGame_leadersInput,
      Game_imageUncheckedCreateWithoutGame_leadersInput
    >;
    connectOrCreate?: Game_imageCreateOrConnectWithoutGame_leadersInput;
    upsert?: Game_imageUpsertWithoutGame_leadersInput;
    connect?: Game_imageWhereUniqueInput;
    update?: XOR<
      XOR<
        Game_imageUpdateToOneWithWhereWithoutGame_leadersInput,
        Game_imageUpdateWithoutGame_leadersInput
      >,
      Game_imageUncheckedUpdateWithoutGame_leadersInput
    >;
  };

  export type CharacterCreateNestedManyWithoutGame_imageInput = {
    create?:
      | XOR<
          CharacterCreateWithoutGame_imageInput,
          CharacterUncheckedCreateWithoutGame_imageInput
        >
      | CharacterCreateWithoutGame_imageInput[]
      | CharacterUncheckedCreateWithoutGame_imageInput[];
    connectOrCreate?:
      | CharacterCreateOrConnectWithoutGame_imageInput
      | CharacterCreateOrConnectWithoutGame_imageInput[];
    createMany?: CharacterCreateManyGame_imageInputEnvelope;
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[];
  };

  export type UserCreateNestedManyWithoutGame_imageInput = {
    create?:
      | XOR<
          UserCreateWithoutGame_imageInput,
          UserUncheckedCreateWithoutGame_imageInput
        >
      | UserCreateWithoutGame_imageInput[]
      | UserUncheckedCreateWithoutGame_imageInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutGame_imageInput
      | UserCreateOrConnectWithoutGame_imageInput[];
    createMany?: UserCreateManyGame_imageInputEnvelope;
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type CharacterUncheckedCreateNestedManyWithoutGame_imageInput = {
    create?:
      | XOR<
          CharacterCreateWithoutGame_imageInput,
          CharacterUncheckedCreateWithoutGame_imageInput
        >
      | CharacterCreateWithoutGame_imageInput[]
      | CharacterUncheckedCreateWithoutGame_imageInput[];
    connectOrCreate?:
      | CharacterCreateOrConnectWithoutGame_imageInput
      | CharacterCreateOrConnectWithoutGame_imageInput[];
    createMany?: CharacterCreateManyGame_imageInputEnvelope;
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[];
  };

  export type UserUncheckedCreateNestedManyWithoutGame_imageInput = {
    create?:
      | XOR<
          UserCreateWithoutGame_imageInput,
          UserUncheckedCreateWithoutGame_imageInput
        >
      | UserCreateWithoutGame_imageInput[]
      | UserUncheckedCreateWithoutGame_imageInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutGame_imageInput
      | UserCreateOrConnectWithoutGame_imageInput[];
    createMany?: UserCreateManyGame_imageInputEnvelope;
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type CharacterUpdateManyWithoutGame_imageNestedInput = {
    create?:
      | XOR<
          CharacterCreateWithoutGame_imageInput,
          CharacterUncheckedCreateWithoutGame_imageInput
        >
      | CharacterCreateWithoutGame_imageInput[]
      | CharacterUncheckedCreateWithoutGame_imageInput[];
    connectOrCreate?:
      | CharacterCreateOrConnectWithoutGame_imageInput
      | CharacterCreateOrConnectWithoutGame_imageInput[];
    upsert?:
      | CharacterUpsertWithWhereUniqueWithoutGame_imageInput
      | CharacterUpsertWithWhereUniqueWithoutGame_imageInput[];
    createMany?: CharacterCreateManyGame_imageInputEnvelope;
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[];
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[];
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[];
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[];
    update?:
      | CharacterUpdateWithWhereUniqueWithoutGame_imageInput
      | CharacterUpdateWithWhereUniqueWithoutGame_imageInput[];
    updateMany?:
      | CharacterUpdateManyWithWhereWithoutGame_imageInput
      | CharacterUpdateManyWithWhereWithoutGame_imageInput[];
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[];
  };

  export type UserUpdateManyWithoutGame_imageNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutGame_imageInput,
          UserUncheckedCreateWithoutGame_imageInput
        >
      | UserCreateWithoutGame_imageInput[]
      | UserUncheckedCreateWithoutGame_imageInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutGame_imageInput
      | UserCreateOrConnectWithoutGame_imageInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutGame_imageInput
      | UserUpsertWithWhereUniqueWithoutGame_imageInput[];
    createMany?: UserCreateManyGame_imageInputEnvelope;
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutGame_imageInput
      | UserUpdateWithWhereUniqueWithoutGame_imageInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutGame_imageInput
      | UserUpdateManyWithWhereWithoutGame_imageInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type CharacterUncheckedUpdateManyWithoutGame_imageNestedInput = {
    create?:
      | XOR<
          CharacterCreateWithoutGame_imageInput,
          CharacterUncheckedCreateWithoutGame_imageInput
        >
      | CharacterCreateWithoutGame_imageInput[]
      | CharacterUncheckedCreateWithoutGame_imageInput[];
    connectOrCreate?:
      | CharacterCreateOrConnectWithoutGame_imageInput
      | CharacterCreateOrConnectWithoutGame_imageInput[];
    upsert?:
      | CharacterUpsertWithWhereUniqueWithoutGame_imageInput
      | CharacterUpsertWithWhereUniqueWithoutGame_imageInput[];
    createMany?: CharacterCreateManyGame_imageInputEnvelope;
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[];
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[];
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[];
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[];
    update?:
      | CharacterUpdateWithWhereUniqueWithoutGame_imageInput
      | CharacterUpdateWithWhereUniqueWithoutGame_imageInput[];
    updateMany?:
      | CharacterUpdateManyWithWhereWithoutGame_imageInput
      | CharacterUpdateManyWithWhereWithoutGame_imageInput[];
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[];
  };

  export type UserUncheckedUpdateManyWithoutGame_imageNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutGame_imageInput,
          UserUncheckedCreateWithoutGame_imageInput
        >
      | UserCreateWithoutGame_imageInput[]
      | UserUncheckedCreateWithoutGame_imageInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutGame_imageInput
      | UserCreateOrConnectWithoutGame_imageInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutGame_imageInput
      | UserUpsertWithWhereUniqueWithoutGame_imageInput[];
    createMany?: UserCreateManyGame_imageInputEnvelope;
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutGame_imageInput
      | UserUpdateWithWhereUniqueWithoutGame_imageInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutGame_imageInput
      | UserUpdateManyWithWhereWithoutGame_imageInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type DataCreatefoundCharactersInput = {
    set: number[];
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DataUpdatefoundCharactersInput = {
    set?: number[];
    push?: number | number[];
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type Game_imageCreateWithoutCharactersInput = {
    image_location: string;
    title: string;
    width: number;
    height: number;
    game_leaders?: UserCreateNestedManyWithoutGame_imageInput;
  };

  export type Game_imageUncheckedCreateWithoutCharactersInput = {
    id?: number;
    image_location: string;
    title: string;
    width: number;
    height: number;
    game_leaders?: UserUncheckedCreateNestedManyWithoutGame_imageInput;
  };

  export type Game_imageCreateOrConnectWithoutCharactersInput = {
    where: Game_imageWhereUniqueInput;
    create: XOR<
      Game_imageCreateWithoutCharactersInput,
      Game_imageUncheckedCreateWithoutCharactersInput
    >;
  };

  export type Game_imageUpsertWithoutCharactersInput = {
    update: XOR<
      Game_imageUpdateWithoutCharactersInput,
      Game_imageUncheckedUpdateWithoutCharactersInput
    >;
    create: XOR<
      Game_imageCreateWithoutCharactersInput,
      Game_imageUncheckedCreateWithoutCharactersInput
    >;
    where?: Game_imageWhereInput;
  };

  export type Game_imageUpdateToOneWithWhereWithoutCharactersInput = {
    where?: Game_imageWhereInput;
    data: XOR<
      Game_imageUpdateWithoutCharactersInput,
      Game_imageUncheckedUpdateWithoutCharactersInput
    >;
  };

  export type Game_imageUpdateWithoutCharactersInput = {
    image_location?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    game_leaders?: UserUpdateManyWithoutGame_imageNestedInput;
  };

  export type Game_imageUncheckedUpdateWithoutCharactersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    image_location?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    game_leaders?: UserUncheckedUpdateManyWithoutGame_imageNestedInput;
  };

  export type Game_imageCreateWithoutGame_leadersInput = {
    image_location: string;
    title: string;
    width: number;
    height: number;
    characters?: CharacterCreateNestedManyWithoutGame_imageInput;
  };

  export type Game_imageUncheckedCreateWithoutGame_leadersInput = {
    id?: number;
    image_location: string;
    title: string;
    width: number;
    height: number;
    characters?: CharacterUncheckedCreateNestedManyWithoutGame_imageInput;
  };

  export type Game_imageCreateOrConnectWithoutGame_leadersInput = {
    where: Game_imageWhereUniqueInput;
    create: XOR<
      Game_imageCreateWithoutGame_leadersInput,
      Game_imageUncheckedCreateWithoutGame_leadersInput
    >;
  };

  export type Game_imageUpsertWithoutGame_leadersInput = {
    update: XOR<
      Game_imageUpdateWithoutGame_leadersInput,
      Game_imageUncheckedUpdateWithoutGame_leadersInput
    >;
    create: XOR<
      Game_imageCreateWithoutGame_leadersInput,
      Game_imageUncheckedCreateWithoutGame_leadersInput
    >;
    where?: Game_imageWhereInput;
  };

  export type Game_imageUpdateToOneWithWhereWithoutGame_leadersInput = {
    where?: Game_imageWhereInput;
    data: XOR<
      Game_imageUpdateWithoutGame_leadersInput,
      Game_imageUncheckedUpdateWithoutGame_leadersInput
    >;
  };

  export type Game_imageUpdateWithoutGame_leadersInput = {
    image_location?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    characters?: CharacterUpdateManyWithoutGame_imageNestedInput;
  };

  export type Game_imageUncheckedUpdateWithoutGame_leadersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    image_location?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    characters?: CharacterUncheckedUpdateManyWithoutGame_imageNestedInput;
  };

  export type CharacterCreateWithoutGame_imageInput = {
    character_name: string;
    icon_location: string;
    xCoordinate: number;
    yCoordinate: number;
  };

  export type CharacterUncheckedCreateWithoutGame_imageInput = {
    id?: number;
    character_name: string;
    icon_location: string;
    xCoordinate: number;
    yCoordinate: number;
  };

  export type CharacterCreateOrConnectWithoutGame_imageInput = {
    where: CharacterWhereUniqueInput;
    create: XOR<
      CharacterCreateWithoutGame_imageInput,
      CharacterUncheckedCreateWithoutGame_imageInput
    >;
  };

  export type CharacterCreateManyGame_imageInputEnvelope = {
    data:
      | CharacterCreateManyGame_imageInput
      | CharacterCreateManyGame_imageInput[];
    skipDuplicates?: boolean;
  };

  export type UserCreateWithoutGame_imageInput = {
    username: string;
    minutes: number;
    seconds: number;
  };

  export type UserUncheckedCreateWithoutGame_imageInput = {
    id?: number;
    username: string;
    minutes: number;
    seconds: number;
  };

  export type UserCreateOrConnectWithoutGame_imageInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutGame_imageInput,
      UserUncheckedCreateWithoutGame_imageInput
    >;
  };

  export type UserCreateManyGame_imageInputEnvelope = {
    data: UserCreateManyGame_imageInput | UserCreateManyGame_imageInput[];
    skipDuplicates?: boolean;
  };

  export type CharacterUpsertWithWhereUniqueWithoutGame_imageInput = {
    where: CharacterWhereUniqueInput;
    update: XOR<
      CharacterUpdateWithoutGame_imageInput,
      CharacterUncheckedUpdateWithoutGame_imageInput
    >;
    create: XOR<
      CharacterCreateWithoutGame_imageInput,
      CharacterUncheckedCreateWithoutGame_imageInput
    >;
  };

  export type CharacterUpdateWithWhereUniqueWithoutGame_imageInput = {
    where: CharacterWhereUniqueInput;
    data: XOR<
      CharacterUpdateWithoutGame_imageInput,
      CharacterUncheckedUpdateWithoutGame_imageInput
    >;
  };

  export type CharacterUpdateManyWithWhereWithoutGame_imageInput = {
    where: CharacterScalarWhereInput;
    data: XOR<
      CharacterUpdateManyMutationInput,
      CharacterUncheckedUpdateManyWithoutGame_imageInput
    >;
  };

  export type CharacterScalarWhereInput = {
    AND?: CharacterScalarWhereInput | CharacterScalarWhereInput[];
    OR?: CharacterScalarWhereInput[];
    NOT?: CharacterScalarWhereInput | CharacterScalarWhereInput[];
    id?: IntFilter<'Character'> | number;
    character_name?: StringFilter<'Character'> | string;
    icon_location?: StringFilter<'Character'> | string;
    xCoordinate?: IntFilter<'Character'> | number;
    yCoordinate?: IntFilter<'Character'> | number;
    imageId?: IntFilter<'Character'> | number;
  };

  export type UserUpsertWithWhereUniqueWithoutGame_imageInput = {
    where: UserWhereUniqueInput;
    update: XOR<
      UserUpdateWithoutGame_imageInput,
      UserUncheckedUpdateWithoutGame_imageInput
    >;
    create: XOR<
      UserCreateWithoutGame_imageInput,
      UserUncheckedCreateWithoutGame_imageInput
    >;
  };

  export type UserUpdateWithWhereUniqueWithoutGame_imageInput = {
    where: UserWhereUniqueInput;
    data: XOR<
      UserUpdateWithoutGame_imageInput,
      UserUncheckedUpdateWithoutGame_imageInput
    >;
  };

  export type UserUpdateManyWithWhereWithoutGame_imageInput = {
    where: UserScalarWhereInput;
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutGame_imageInput
    >;
  };

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[];
    OR?: UserScalarWhereInput[];
    NOT?: UserScalarWhereInput | UserScalarWhereInput[];
    id?: IntFilter<'User'> | number;
    username?: StringFilter<'User'> | string;
    minutes?: IntFilter<'User'> | number;
    seconds?: IntFilter<'User'> | number;
    imageId?: IntFilter<'User'> | number;
  };

  export type CharacterCreateManyGame_imageInput = {
    id?: number;
    character_name: string;
    icon_location: string;
    xCoordinate: number;
    yCoordinate: number;
  };

  export type UserCreateManyGame_imageInput = {
    id?: number;
    username: string;
    minutes: number;
    seconds: number;
  };

  export type CharacterUpdateWithoutGame_imageInput = {
    character_name?: StringFieldUpdateOperationsInput | string;
    icon_location?: StringFieldUpdateOperationsInput | string;
    xCoordinate?: IntFieldUpdateOperationsInput | number;
    yCoordinate?: IntFieldUpdateOperationsInput | number;
  };

  export type CharacterUncheckedUpdateWithoutGame_imageInput = {
    id?: IntFieldUpdateOperationsInput | number;
    character_name?: StringFieldUpdateOperationsInput | string;
    icon_location?: StringFieldUpdateOperationsInput | string;
    xCoordinate?: IntFieldUpdateOperationsInput | number;
    yCoordinate?: IntFieldUpdateOperationsInput | number;
  };

  export type CharacterUncheckedUpdateManyWithoutGame_imageInput = {
    id?: IntFieldUpdateOperationsInput | number;
    character_name?: StringFieldUpdateOperationsInput | string;
    icon_location?: StringFieldUpdateOperationsInput | string;
    xCoordinate?: IntFieldUpdateOperationsInput | number;
    yCoordinate?: IntFieldUpdateOperationsInput | number;
  };

  export type UserUpdateWithoutGame_imageInput = {
    username?: StringFieldUpdateOperationsInput | string;
    minutes?: IntFieldUpdateOperationsInput | number;
    seconds?: IntFieldUpdateOperationsInput | number;
  };

  export type UserUncheckedUpdateWithoutGame_imageInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    minutes?: IntFieldUpdateOperationsInput | number;
    seconds?: IntFieldUpdateOperationsInput | number;
  };

  export type UserUncheckedUpdateManyWithoutGame_imageInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    minutes?: IntFieldUpdateOperationsInput | number;
    seconds?: IntFieldUpdateOperationsInput | number;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
