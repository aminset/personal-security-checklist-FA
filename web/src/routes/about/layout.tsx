import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const useRouteLoader = routeLoader$(() => {
  return {};
});

export default component$(() => {
  return <Slot />;
});
