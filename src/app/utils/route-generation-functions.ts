import { Route, Routes } from '@angular/router';

import { TagCount } from 'src/app/interfaces/tag-count';
import { Tag } from 'src/app/interfaces/tag';
import { Post } from 'src/app/interfaces/post';
import { Author } from 'src/app/interfaces/author';

import { subroutes2021 } from 'src/app/routing/app.sub-routes-2021';
import { subroutes2020 } from '../routing/app.sub-routes-2020';

/** The compiled routes from all of the lazy-loaded modules. */
export const routes: Routes = [...subroutes2020, ...subroutes2021];

/**
 * Function that counts the number of {@link Post | Post} per {@link Tag | Tag}.
 *
 * @export
 */
export function countTags(): TagCount[] {
  const output: TagCount[] = [];
  for (const r of routes) {
    if (r.data !== undefined && r.data.tags !== undefined) {
      for (const t of r.data.tags) {
        if (output.map(x => x.tag_name).includes(t.name)) {
          output.filter(x => x.tag_name === t.name)[0].count += 1;
        } else {
          output.push({ tag_name: t.name, count: 1});
        }
      }
    }
  }

  return output;
}

/**
 * Function that returns the corresponding {@link Post | Post} to the given @param { Route } r.
 *
 * @param r The route for which the corresponding {@link Post | Post} should be determined.
 */
function routeToPost(r: Route): Post {
  return {
    path: r.path.slice(0),
    date: [Number.parseInt(r.path.slice(0, 4), 10), Number.parseInt(r.path.slice(5, 7), 10), Number.parseInt(r.path.slice(8, 10), 10)],
    description: r.data.description,
    title: r.data.title,
    imageUrl: r.data.imageUrl ?? '',
    tags: r.data.tags,
    authors: r.data.authors
  };
}

/**
 * Function that returns all of the {@link Post | Posts} that possess the @param { string } filter {@link Tag | Tag}
 *
 * @param filter The {@link Tag} the posts should be filtered for.
 * @export
 */
export function filterPostRoutesByTag(filter: string): Post[] {
  return routes.filter((x: Route) => x.data.tags.map((y: Tag) => y.name).includes(filter))
    .sort((a: Route, b: Route) => (a.path > b.path ? -1 : 1))
    .map((r: Route) => routeToPost(r));
}

/**
 * Function that returns all of the {@link Post | Posts} that possess the {@link Author | author} identified by @param { string } author.
 *
 * @param filter The {@link Author} the posts should be filtered for.
 * @export
 */
export function filterPostRoutesByAuthor(author: string): Post[] {
  return routes
    .filter((x: Route) => x.data.authors.map((y: Author) => y.name).includes(author))
    .sort((a: Route, b: Route) => (a.path > b.path ? -1 : 1))
    .map((r: Route) => routeToPost(r));
}

/**
 * Function that returns all of the {@link Post | Posts}.
 *
 * @export
 */
export function generatePostRoutes(): Post[] {
  return routes
    .sort((a: Route, b: Route) => (a.path > b.path ? -1 : 1))
    .map((r: Route) => routeToPost(r));
}
