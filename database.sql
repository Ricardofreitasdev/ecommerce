CREATE TABLE `products` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `user_id` int,
  `name` text,
  `description` text,
  `old_price` int,
  `quantity` int,
  `status` int,
  `createdAt` timestamp DEFAULT (now()),
  `updatedAt` timestamp DEFAULT (now())
);

CREATE TABLE `categories` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` text,
  `createdAt` timestamp DEFAULT (now()),
  `updatedAt` timestamp DEFAULT (now())
);

CREATE TABLE `files` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` text,
  `path` text,
  `product_id` int,
  `createdAt` timestamp DEFAULT (now()),
  `updatedAt` timestamp DEFAULT (now()) 
);

ALTER TABLE `product` ADD FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`);
ALTER TABLE `files` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);