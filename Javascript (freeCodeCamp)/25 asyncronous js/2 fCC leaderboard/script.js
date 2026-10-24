const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

const postsContainer = document.getElementById('posts-container');

const MS_PER_MINUTE = 1000 * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;

const timeAgo = timestamp => {
  const diff = Math.abs(new Date() - new Date(timestamp));

  const minutes = Math.floor(diff / MS_PER_MINUTE);
  if (minutes < 60) return `${minutes}m ago`;

  const hours = Math.floor(diff / MS_PER_HOUR);
  if (hours < 24) return `${hours}h ago`;

  return `${Math.floor(diff / MS_PER_DAY)}d ago`;
};

const viewCount = views => {
  return views >= 1000 ? `${Math.floor(views / 1000)}k` : views;
};

const forumCategory = id => {
  const { category, className } = Object.hasOwn(allCategories, id)
    ? allCategories[id]
    : { category: 'General', className: 'general' };

  return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${id}">${category}</a>`;
};

const avatars = (posters, users) => {
  return posters
    .map(({ user_id }) => {
      const user = users.find(u => u.id === user_id);
      if (!user) return '';

      const template = user.avatar_template.replace('{size}', '30');
      const src = template.startsWith('/') ? avatarUrl + template : template;

      return `<img src="${src}" alt="${user.name}">`;
    })
    .join('');
};

const showLatestPosts = ({ users, topic_list }) => {
  const { topics } = topic_list;

  postsContainer.innerHTML = topics
    .map(({ id, title, views, posts_count, slug, posters, category_id, bumped_at }) => `
      <tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
          ${forumCategory(category_id)}
        </td>
        <td>
          <div class="avatar-container">${avatars(posters, users)}</div>
        </td>
        <td>${posts_count - 1}</td>
        <td>${viewCount(views)}</td>
        <td>${timeAgo(bumped_at)}</td>
      </tr>`)
    .join('');
};

async function fetchData() {
  try {
    const res = await fetch(forumLatest);
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
}

fetchData();