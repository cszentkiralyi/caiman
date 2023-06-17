/* Mock data, objects, unicorns, whatever.
 *
 * This file is very ugly and I don't care. That's not the point.
 */

const MockRequests = {
    'posts': '{ "@context": "/api/contexts/post", "@id": "/api/posts", "@type": "hydra:Collection", "hydra:member": [ { "@id": "/api/posts/1", "@type": "post", "magazine": { "@id": "/api/magazines/karabin", "@type": "magazine", "name": "karabin" }, "user": { "@id": "/api/users/ernest", "@type": "user", "username": "ernest", "avatar": { "@id": "/api/images/54", "@type": "image", "filePath": "89/bf/89bf6b16d2516c0756275aacbc88f443c45076c554e3e19b132c3ffd9e8356ee.jpg", "width": 978, "height": 931 } }, "image": null, "body": "Lorem ipsum", "isAdult": false, "comments": 2, "uv": 0, "dv": 0, "score": 0, "visibility": "visible", "createdAt": "2021-09-08T13:00:28+00:00", "lastActive": "2021-09-16T06:59:32+00:00", "bestComments": [ { "@id": "/api/post_comments/1", "@type": "post_comment", "user": { "@id": "/api/users/ernest", "@type": "user", "username": "ernest", "avatar": { "@id": "/api/images/54", "@type": "image", "filePath": "89/bf/89bf6b16d2516c0756275aacbc88f443c45076c554e3e19b132c3ffd9e8356ee.jpg", "width": 978, "height": 931 } }, "image": null, "body": "Lorem ipsum", "uv": 0, "createdAt": "2021-09-08T13:56:19+00:00", "lastActive": "2021-09-08T13:56:19+00:00", "id": 1 }, { "@id": "/api/post_comments/3", "@type": "post_comment", "user": { "@id": "/api/users/ernest", "@type": "user", "username": "ernest", "avatar": { "@id": "/api/images/54", "@type": "image", "filePath": "89/bf/89bf6b16d2516c0756275aacbc88f443c45076c554e3e19b132c3ffd9e8356ee.jpg", "width": 978, "height": 931 } }, "image": null, "body": "Lorem ipsum", "uv": 0, "createdAt": "2021-09-16T06:59:32+00:00", "lastActive": "2021-09-16T06:59:32+00:00", "id": 3 } ], "id": 1 } ], "hydra:totalItems": 196, "hydra:view": { "@id": "/api/entries.jsonld?page=1", "@type": "hydra:PartialCollectionView", "hydra:first": "/api/entries.jsonld?page=1", "hydra:last": "/api/entries.jsonld?page=8", "hydra:next": "/api/entries.jsonld?page=2" } }',
    'magazines': '{ "@context": "/api/contexts/magazine", "@id": "/api/magazines", "@type": "hydra:Collection", "hydra:member": [ { "@id": "/api/magazines/rust", "@type": "magazine", "user": { "@id": "/api/users/ernest", "@type": "user", "username": "ernest" }, "cover": { "@id": "/api/images/56", "@type": "image", "filePath": "08/8e/088e62b44d8a946015e2fb1378ef6866c3e1b059107b67e7391d7b1c7ca7c40b.jpg", "width": 2048, "height": 1024 }, "name": "rust", "title": "rust", "description": null, "rules": null, "subscriptionsCount": 1, "entryCount": 1, "entryCommentCount": 0, "postCount": 0, "postCommentCount": 0, "isAdult": false } ], "hydra:totalItems": 13 }'
};

module.exports = {
    Api: {
        Get: (path) => new Promise((resolve, reject) => {
            if (MockRequests.hasOwnProperty(path)) {
                resolve(MockRequests[path]);
            } else {
                reject(null);
            }
        })
    }
};