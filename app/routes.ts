import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
  route("contacts/:contactId", "routes/contacts.$contactId.tsx"),
] satisfies RouteConfig;
