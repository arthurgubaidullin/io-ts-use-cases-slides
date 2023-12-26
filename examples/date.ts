import { identity, pipe } from "fp-ts/function";
import * as E from "fp-ts/Either";
import * as t from "io-ts";
import * as PathReporter from "io-ts/PathReporter";
import { DateFromISOString } from "io-ts-types";

export type User = t.TypeOf<typeof User>;

export const User = t.type(
  {
    name: t.string,
    birthday: DateFromISOString,
  },
  "User"
);

const userToVerify = {
  name: "Artur",
  birthday: new Date(2023, 11, 4).toDateString(),
};

const user: User = pipe(
  userToVerify,
  User.decode,
  E.mapLeft(PathReporter.failure),
  E.fold((errors) => {
    throw new Error(errors.join("\n"));
  }, identity)
);

console.log(user);
