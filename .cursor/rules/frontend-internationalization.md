

### Async components

These are primarly concerned with fetching data and can not use hooks. Due to this, next-intl provides a set of awaitable versions of the functions that you usually call as hooks from within components.

```page.tsx
import {getTranslations} from 'next-intl/server';
 
export default async function ProfilePage() {
  const user = await fetchUser();
  const t = await getTranslations('ProfilePage');
 
  return (
    <PageLayout title={t('title', {username: user.name})}>
      <UserDetails user={user} />
    </PageLayout>
  );
}
```

These functions are available:

- getTranslations
- getFormatter
- getNow
- getTimeZone
- getMessages
- getLocale

Components that aren’t declared with the async keyword and don’t use interactive features like useState, are referred to as shared components. These can render either as a Server or Client Component, depending on where they are imported from.


### Non-async components

In Next.js, Server Components are the default, and therefore shared components will typically execute as Server Components.

```UserDetails.tsx
import {useTranslations} from 'next-intl';
 
export default function UserDetails({user}) {
  const t = useTranslations('UserProfile');
 
  return (
    <section>
      <h2>{t('title')}</h2>
      <p>{t('followers', {count: user.numFollowers})}</p>
    </section>
  );
}
```