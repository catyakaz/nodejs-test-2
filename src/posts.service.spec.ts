import { PostsService, FindManyOptions } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe('.findMany', () => {
    const posts = [
      {text: 'Post 1'},
      {text: 'Post 2'},
      {text: 'Post 3'},
      {text: 'Post 4'},
    ];

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it('should return all posts if called without options', () => {
      const findManyPosts = postsService.findMany();
      const postsLength = findManyPosts.length;
      const result = {
        id: `${postsLength}`,
        text: 'Post 4',
      };

      expect(postsLength).toBe(postsLength);
      expect(findManyPosts[postsLength - 1]).toHaveProperty('text');
      expect(findManyPosts[postsLength - 1]).toEqual(result);
    });

    it('should return correct posts for skip and limit options', () => {
      const options: FindManyOptions = { skip: 2, limit: 1 };
      const findManyPosts = postsService.findMany(options);
      const postsLength = findManyPosts.length;
      const result = {
        id: '3',
        text: 'Post 3',
      };

      expect(postsLength).toBe(1);
      expect(findManyPosts[0]).toHaveProperty('text');
      expect(findManyPosts[0]).toEqual(result);
    });

    it('should return correct posts for skip options', () => {
      const options: FindManyOptions = { skip: 2 };
      const findManyPosts = postsService.findMany(options);
      const postsLength = findManyPosts.length;
      const result = {
        id: '3',
        text: 'Post 3',
      };

      expect(postsLength).toBe(2);
      expect(findManyPosts[0]).toHaveProperty('text');
      expect(findManyPosts[0]).toEqual(result);
    });

    it('should return correct posts for limit options', () => {
      const options: FindManyOptions = { limit: 3 };
      const findManyPosts = postsService.findMany(options);
      const postsLength = findManyPosts.length;
      const result = {
        id: '1',
        text: 'Post 1',
      };

      expect(postsLength).toBe(3);
      expect(findManyPosts[0]).toHaveProperty('text');
      expect(findManyPosts[0]).toEqual(result);
    });
  });
});
