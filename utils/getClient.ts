import type { Payload } from "payload";
import payload from "payload";
import type { InitOptions } from "payload/config";
import config from "@/payload.config";

let cached: { client: Payload | null; promise: Promise<Payload> | null } = {
  client: null,
  promise: null,
};

interface Args {
  initOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({
  initOptions,
}: Args = {}): Promise<Payload> => {
  if (cached.client) {
    return cached.client;
  }
  if (!cached.promise) {
    cached.promise = payload.init({ config });
  }
  try {
    cached.client = await cached.promise;
  } catch (e: unknown) {
    cached.promise = null;
    throw e;
  }
  return cached.client;
};
