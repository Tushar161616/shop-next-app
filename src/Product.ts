const Product = [
    { "id": 1, "name": "Cotton Shirt", "category": "Clothing", "rating": 4, "price": 199, "image": "https://pngimg.com/d/dress_shirt_PNG8061.png" },
    { "id": 2, "name": "Floral Dress",  "category": "Clothing", "rating": 5, "price": 349, "image": "https://png.pngtree.com/png-clipart/20241117/original/pngtree-floral-girl-dress-png-image_17163494.png" },
    { "id": 3, "name": "Denim Jeans", "category": "Clothing", "rating": 3, "price": 499, "image": "https://png.pngtree.com/thumb_back/fh260/background/20220529/pngtree-stack-of-folded-old-jeans-blue-pair-garment-photo-image_2890221.jpg" },
    { "id": 4, "name": "Leather Jacket", "category": "Clothing", "rating": 5, "price": 899, "image": "https://static.vecteezy.com/system/resources/previews/053/338/348/non_2x/black-leather-jacket-on-transparent-background-free-png.png" },
    { "id": 5, "name": "Summer Shorts", "category": "Clothing", "rating": 2, "price": 149, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXBmG_yihedDMfjttfNPY64UYiBLItAsv8g&s" },
    { "id": 6, "name": "Wool Sweater", "category": "Clothing", "rating": 4, "price": 599, "image": "https://png.pngtree.com/png-vector/20240724/ourmid/pngtree-soft-wool-beige-jumper-isolated-png-image_13212422.png" },
    { "id": 7, "name": "Casual Hoodie", "category": "Clothing", "rating": 5, "price": 699, "image": "https://png.pngtree.com/png-clipart/20241210/original/pngtree-over-sized-hoodie-isolated-on-white-transparent-background-png-image_17779068.png" },
    { "id": 8, "name": "Sport Cap", "rating": 3, "price": 129, "image": "https://png.pngtree.com/png-clipart/20230423/ourmid/pngtree-sports-cap-png-image_6721709.png" },
    { "id": 9, "name": "Silk Saree", "category": "Clothing", "rating": 5, "price": 999, "image": "https://static.vecteezy.com/system/resources/previews/052/646/401/non_2x/vibrant-stacked-silk-sarees-in-hues-isolated-transparent-png.png" },
    { "id": 10, "name": "Formal Blazer", "category": "Clothing", "rating": 4, "price": 799, "image": "https://freepngimg.com/save/138526-blazer-formal-free-download-image/1400x1400" },

    { "id": 11, "name": "Smart TV", "category": "Electronics", "rating": 5, "price": 950, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0wDPu8zqxYUpwxCZbAg2rd4PKVcB8fZvKQ&s" },
    { "id": 12, "name": "Gaming Mouse", "category": "Electronics", "rating": 4, "price": 299, "image": "https://static.vecteezy.com/system/resources/thumbnails/048/218/131/small/gaming-mouse-with-colorful-lights-isolated-from-background-free-png.png" },
    { "id": 13, "name": "Wireless Keyboard", "category": "Electronics", "rating": 3, "price": 399, "image": "https://www.pngplay.com/wp-content/uploads/13/Wireless-Keyboard-Free-PNG.png" },
    { "id": 14, "name": "Bluetooth Speaker", "category": "Electronics", "rating": 5, "price": 550, "image": "https://freepngimg.com/save/50503-bluetooth-speaker-free-download-png-hd/680x580" },
    { "id": 15, "name": "Noise Headphones", "category": "Electronics", "rating": 4, "price": 749, "image": "https://png.pngtree.com/png-vector/20240918/ourmid/pngtree-noise-cancelling-headphones-on-white-background-png-image_13860339.png" },

    { "id": 16, "name": "Digital Camera", "category": "Electronics", "rating": 5, "price": 1000, "image": "https://static.vecteezy.com/system/resources/previews/047/459/317/non_2x/digital-camera-isolated-on-transparent-background-free-png.png" },
    { "id": 17, "name": "Power Bank", "category": "Electronics", "rating": 3, "price": 199, "image": "https://www.kindpng.com/picc/m/390-3908343_power-bank-png-xiaomi-power-bank-2-transparent.png" },
    { "id": 18, "name": "LED Monitor", "category": "Electronics", "rating": 4, "price": 899, "image": "https://png.pngtree.com/png-clipart/20250208/original/pngtree-modern-lcd-monitor-on-white-background-with-a-display-of-clouds-png-image_19528558.png" },
    { "id": 19, "name": "Smart Watch", "category": "Electronics", "rating": 5, "price": 699, "image": "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png" },
    { "id": 20, "name": "VR Headset", "category": "Electronics", "rating": 4, "price": 950, "image": "https://img.freepik.com/free-photo/vr-glasses-gaming_23-2151138393.jpg?semt=ais_hybrid&w=740&q=80" },

    { "id": 21, "name": "Wooden Vase", "category": "Home Decor", "rating": 4, "price": 399, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2hDKD26tZEgWBpWXEimZm-EaKR0bCjEhOg&s" },
    { "id": 22, "name": "Stone Idol", "category": "Home Decor", "rating": 5, "price": 799, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoK29l8Fk-5a2oX97XpNFs4B9UBZbhjHXF4Q&s" },
    { "id": 23, "name": "Metal Lamp", "category": "Home Decor", "rating": 3, "price": 450, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePAx5MFS6jqF0WTO2fDdDyfX9LBGU6Tnp3A&s" },
    { "id": 24, "name": "Wall Clock", "category": "Home Decor", "rating": 4, "price": 299, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjIgMwNvxSn3iaCjCnNSwPH46ckVNWsbhMPA&s" },
    { "id": 25, "name": "Ceramic Bowl", "category": "Home Decor", "rating": 2, "price": 199, "image": "https://static.vecteezy.com/system/resources/previews/054/591/825/non_2x/white-bowl-on-transparent-background-free-png.png" },

    { "id": 26, "name": "Graphic Shirt", "category": "Clothing", "rating": 4, "price": 249, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSOefpWHZmbjDEjB2SnVirWQRwKz9utt4Ag&s" },
    { "id": 27, "name": "Linen Pants", "category": "Clothing", "rating": 3, "price": 549, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95yUqYlbRcTvMDfrzafm1FhfN29pWZ7NFqw&s" },
    { "id": 28, "name": "Track Jacket", "category": "Clothing", "rating": 5, "price": 699, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2l8meZX_-AuoWT0Ge2qQCypDfhGRUF3ewg&s" },
    { "id": 29, "name": "Running Shoes", "rating": 4, "price": 899, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjh1Ekjitsci08dY5QUwRNCjC5So3hZu7Sw&s" },
    { "id": 30, "name": "Winter Coat", "category": "Clothing", "rating": 5, "price": 1000, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJtSFQBmw8L5ZRp-bN592C-SVDgthTwaR-A&s" },

    { "id": 31, "name": "Tablet Pro", "category": "Electronics", "rating": 4, "price": 950, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFoSPdtc7DMOdSDct4kwKxB93c2RLEsGxIGQ&s" },
    { "id": 32, "name": "USB Cable", "category": "Electronics", "rating": 3, "price": 149, "image": "https://pngimg.com/d/usb_cable_PNG9.png" },
    { "id": 33, "name": "Web Camera", "category": "Electronics", "rating": 4, "price": 499, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhWhZst4FnfhY5dPTwzST89h_O8JHt5jJBA&s" },
    { "id": 34, "name": "Drone Mini", "category": "Electronics", "rating": 5, "price": 1000, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJhmzJQtDkQhk4LVU8M1F-WItsiYs-9nCsg&s" },
    { "id": 35, "name": "Projector HD", "category": "Electronics", "rating": 4, "price": 899, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gHT0lwZ6Oo1tnSprB51Rdi1Qb296YbQ6rQ&s" },

    { "id": 36, "name": "Clay Pot", "category": "Home Decor", "rating": 3, "price": 199, "image": "https://png.pngtree.com/png-clipart/20220331/ourlarge/pngtree-clay-pot-png-png-image_4521358.png" },
    { "id": 37, "name": "Bronze Statue", "category": "Home Decor", "rating": 5, "price": 950, "image": "https://png.pngtree.com/png-vector/20240512/ourmid/pngtree-antique-bronze-statue-illustrations-png-image_12441389.png" },
    { "id": 38, "name": "Glass Frame", "category": "Home Decor", "rating": 4, "price": 349, "image": "https://png.pngtree.com/png-clipart/20230927/original/pngtree-crystal-button-square-glass-lens-mirror-frame-mirror-decorative-pattern-png-image_13137048.png" },
    { "id": 39, "name": "Canvas Art", "category": "Home Decor", "rating": 5, "price": 799, "image": "https://png.pngtree.com/png-vector/20250416/ourmid/pngtree-mini-easel-with-blank-canvas-for-painting-display-png-image_15993140.png" },
    { "id": 40, "name": "Marble Decor", "category": "Home Decor", "rating": 4, "price": 650, "image": "https://png.pngtree.com/png-vector/20240813/ourmid/pngtree-bright-glass-marble-with-clear-background-for-design-projects-png-image_13467176.png" },

    { "id": 41, "name": "Polo Shirt", "category": "Clothing", "rating": 4, "price": 299, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ua6LGVgjOrhP-ERptA243qBXFz5zGYgxcA&s" },
    { "id": 42, "name": "Maxi Skirt", "category": "Clothing", "rating": 3, "price": 399, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPN9XcIoLN70O7uQyGFFWHjjAKC_faXideA&s" },
    { "id": 43, "name": "Crop Top", "category": "Clothing", "rating": 5, "price": 249, "image": "https://png.pngtree.com/png-clipart/20220705/ourmid/pngtree-trendy-jeans-crop-top-png-image_5684261.png" },
    { "id": 44, "name": "Cargo Pants", "category": "Clothing", "rating": 4, "price": 549, "image": "https://i.pinimg.com/736x/cc/5e/2f/cc5e2f003d588789d06b53262e792ba6.jpg" },
    { "id": 45, "name": "Rain Jacket", "category": "Clothing", "rating": 5, "price": 699, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdr3CxI01Vdxa1_BQ3d06V42JagOAP4Sf3ig&s" },

    { "id": 46, "name": "Laptop Air", "category": "Electronics", "rating": 5, "price": 1000, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAiX967SHcdWp_2OGqm6NUyubaTIfdG9wXA&s" },
    { "id": 47, "name": "Ear Buds", "category": "Electronics", "rating": 4, "price": 499, "image": "https://png.pngtree.com/png-vector/20250416/ourmid/pngtree-white-airpods-wireless-earphones-with-charging-case-isolated-on-transparent-background-png-image_16032402.png" },
    { "id": 48, "name": "Desk Lamp", "category": "Electronics", "rating": 3, "price": 299, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iNQ1y1IMIZpWEprje-lHUhqKJIZqGLEUyA&s" },
    { "id": 49, "name": "Photo Frame", "category": "Home Decor", "rating": 4, "price": 199, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3oa6MKvVps03YJct0VVDzUIN9Ix2EnIzftg&s" },
    { "id": 50, "name": "Sound Bar", "category": "Electronics", "rating": 5, "price": 950, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YDNTLZmNnMf9Rj0N8kj9F_Sc5RUZnJvEVQ&s" },

    { "id": 51, "name": "Hooded Coat", "category": "Clothing", "rating": 4, "price": 799, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GHnpaS3zqFWWxEYp-zXOlfFK3F2avv7KMQ&s" },
    { "id": 52, "name": "Slim Suit", "category": "Clothing", "rating": 5, "price": 899, "image": "https://i.pinimg.com/736x/c9/f5/a2/c9f5a2d8a0d58fe810f42fc330167fa4.jpg" },
    { "id": 53, "name": "Party Gown", "category": "Clothing", "rating": 4, "price": 950, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdIWIwCt1HcxcKJMUFMPslvhAX-cc1EVPOQ&s" },
    { "id": 54, "name": "Office Shirt", "category": "Clothing", "rating": 3, "price": 399, "image": "https://static.vecteezy.com/system/resources/previews/055/300/191/non_2x/white-office-shirt-on-white-on-transparent-background-png.png" },
    { "id": 55, "name": "Beach Hat", "category": "Clothing", "rating": 4, "price": 199, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2zf73RgBTs3Y65seXk-sIt7-Lx8UgCUjeTA&s" },

    { "id": 56, "name": "Smart Phone", "category": "Electronics", "rating": 5, "price": 1000, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO90YTnjj1_1IB_qw-0E48wkIEdQZbM5Aaw&s" },
    { "id": 57, "name": "Action Camera", "category": "Electronics", "rating": 4, "price": 899, "image": "https://png.pngtree.com/png-clipart/20250710/original/pngtree-4k-action-camera-isolated-on-transparent-background-png-image_21299081.png" },
    { "id": 58, "name": "Gaming Chair", "category": "Home Decor", "rating": 5, "price": 950, "image": "https://static.vecteezy.com/system/resources/previews/054/606/511/non_2x/gaming-chair-isolated-on-transparent-background-free-png.png" },
    { "id": 59, "name": "Office Desk", "category": "Home Decor", "rating": 4, "price": 799, "image": "https://t4.ftcdn.net/jpg/06/27/81/39/360_F_627813910_NanJzCSXjXeNnFbCk3aPpFIJCYoqDM0M.jpg" },
    { "id": 60, "name": "LED Strip", "category": "Electronics",  "rating": 3, "price": 149, "image": "https://static.vecteezy.com/system/resources/previews/068/645/839/non_2x/colorful-led-strip-lights-coiled-in-circular-shape-showcasing-vibrant-hues-that-create-lively-atmosphere-perfect-for-decoration-and-enhancing-spaces-with-bright-illumination-png.png" },

    { "id": 61, "name": "Wall Painting", "category": "Home Decor", "rating": 5, "price": 699, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bXq9Q-N_EXcRCOldCnSeIjNa8iEuy_G8wA&s" },
    { "id": 62, "name": "Wood Frame", "category": "Home Decor", "rating": 4, "price": 299, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYKmyNQ-bwP0rcE6FO05iEWTY3YTlcXc_6Q&s" },
    { "id": 63, "name": "Stone Vase", "category": "Home Decor", "rating": 4, "price": 399, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSEMEN-IOsEzxjoM-O4fLv1Omu4ZYu43Ihow&s" },
    { "id": 64, "name": "Metal Clock", "category": "Home Decor", "rating": 5, "price": 499, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9i4x233uUyTX_IO6NIUiXSKBe9Nc8Tf_W5w&s" },
    { "id": 65, "name": "Art Sculpture", "category": "Home Decor", "rating": 5, "price": 950, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcFb8JV7r7CZxehmoLsI5NbUcEvQNBMq69Q&s" },

    { "id": 66, "name": "Printed Tee", "category": "Clothing", "rating": 3, "price": 249, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1pfbgwiTH9XZToldjvDmHvuBQYT9cSy-mQ&s" },
    { "id": 67, "name": "Denim Jacket", "category": "Clothing", "rating": 4, "price": 699, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrqJg0Y4BHZe6CjkXlv5zB2Wpnuh6Cgjo_3A&s" },
    { "id": 68, "name": "Yoga Pants", "category": "Clothing", "rating": 4, "price": 399, "image": "https://png.pngtree.com/png-clipart/20250220/original/pngtree-yoga-pants-a-high-quality-image-png-image_20483449.png" },
    { "id": 69, "name": "Tank Top", "category": "Clothing", "rating": 3, "price": 199, "image": "https://img.freepik.com/premium-vector/tank-top-illustration-transparent-background_565844-326.jpg" },
    { "id": 70, "name": "Leather Boots",  "rating": 5, "price": 899, "image": "https://static.vecteezy.com/system/resources/previews/055/533/978/non_2x/stylish-brown-leather-cowboy-boots-with-intricate-design-on-a-transparent-background-brown-leather-cowboy-boots-isolated-on-transparent-background-free-png.png" },

    { "id": 71, "name": "Tablet Case", "category": "Electronics",  "rating": 4, "price": 149, "image": "https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-slim-tablet-cover-render-modern-protective-shell-png-image_16070900.png" },
    { "id": 72, "name": "Phone Stand", "category": "Electronics",  "rating": 3, "price": 129, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuUehVqGtNVIq6soXgTRsrSa9k4tv4i_xCA&s" },
    { "id": 73, "name": "HD Speaker", "category": "Electronics",  "rating": 5, "price": 799, "image": "https://static.vecteezy.com/system/resources/thumbnails/038/348/649/small/ai-generated-black-bookshelf-speaker-png.png" },
    { "id": 74, "name": "Pro Headset", "rating": 4, "price": 699, "image": "https://png.pngtree.com/png-clipart/20240525/original/pngtree-beautiful-gaming-headphone-isolated-on-transparent-background-png-image_15176784.png" },
    { "id": 75, "name": "Mini Drone", "category": "Electronics",  "rating": 5, "price": 950, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_QTiq6gKb3WlJuXtyTRAP6JcEcZ9vAdWuQ&s" },

    { "id": 76, "name": "Clay Statue", "category": "Home Decor", "rating": 4, "price": 399, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqTFPgwu6gZ9-QAsyjpyeGM1are5eb9QVig&s" },
    { "id": 77, "name": "Bronze Lamp", "category": "Home Decor", "rating": 5, "price": 699, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA31_orlO_myXSQjeAriElOv8SooOkXEwIzA&s" },
    { "id": 78, "name": "Art Frame", "category": "Home Decor", "rating": 4, "price": 299, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudeaoVTOSdTEQQOxmGb4Z8DQDfL_0CYvdVQ&s" },
    { "id": 79, "name": "Stone Decor", "category": "Home Decor", "rating": 3, "price": 349, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxxt9HSQD9XFgxi_k9AFuEXs5PZastryN3g&s" },
    { "id": 80, "name": "Metal Vase", "category": "Home Decor", "rating": 5, "price": 599, "image": "https://static.vecteezy.com/system/resources/previews/056/565/599/non_2x/silver-metal-vase-polished-reflective-on-transparent-background-png.png" },

    { "id": 81, "name": "Casual Shirt", "category": "Clothing", "rating": 4, "price": 299, "image": "https://png.pngtree.com/png-vector/20240822/ourmid/pngtree-stack-of-folded-striped-dress-shirts-isolated-on-black-background-png-image_13591037.png" },
    { "id": 82, "name": "Evening Dress", "category": "Clothing", "rating": 5, "price": 899, "image": "https://i.pinimg.com/736x/e4/92/0d/e4920d84f73b5788b456b5bdf5e850ca.jpg" },
    { "id": 83, "name": "Slim Jeans", "category": "Clothing", "rating": 4, "price": 499, "image": "https://i.pinimg.com/736x/7a/39/f9/7a39f98824619af95bfd35b59537fa0d.jpg" },
    { "id": 84, "name": "Track Pants", "category": "Clothing", "rating": 3, "price": 399, "image": "https://png.pngtree.com/png-vector/20250920/ourmid/pngtree-nike-track-pants-style-and-comfort-redefined-png-image_17526492.webp" },
    { "id": 85, "name": "Winter Boots", "rating": 5, "price": 950, "image": "https://png.pngtree.com/png-vector/20260105/ourmid/pngtree-brown-leather-winter-boots-on-grey-background-scene-png-image_18415156.webp" },

    { "id": 86, "name": "Gaming Laptop", "category": "Electronics",  "rating": 5, "price": 1000, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNsfkjFd88RwybVyBSagC8nHgpUfXKEsVN5g&s" },
    { "id": 87, "name": "Smart Speaker", "category": "Electronics",  "rating": 4, "price": 699, "image": "https://static.vecteezy.com/system/resources/thumbnails/042/055/908/small/ai-generated-a-wireless-mini-smart-bluetooth-speaker-with-vibrant-color-and-a-modern-design-isolated-on-transparent-background-png.png" },
    { "id": 88, "name": "Office Monitor", "category": "Electronics",  "rating": 4, "price": 899, "image": "https://thumbs.dreamstime.com/b/modern-flat-screen-computer-monitor-isolated-transparent-background-sleek-light-blue-presented-device-perfect-395114008.jpg" },
    { "id": 89, "name": "VR Glasses", "category": "Electronics",  "rating": 5, "price": 950, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtkUhlyQ9uWaRDp44Iv4EAIJAo8lfYWmqCw&s" },
    { "id": 90, "name": "Studio Camera", "category": "Electronics",  "rating": 5, "price": 1000, "image": "https://static.vecteezy.com/system/resources/thumbnails/052/647/855/small/dslr-camera-with-large-lens-on-display-png.png" },

    { "id": 91, "name": "Canvas Frame", "category": "Home Decor", "rating": 4, "price": 399, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSdLSmMTFpgHvkowYiNJrgqkd-M17u92fFg&s" },
    { "id": 92, "name": "Decor Clock", "category": "Home Decor", "rating": 3, "price": 299, "image": "https://img.freepik.com/free-vector/wall-office-clock-with-black-red-hands-white-dial_1284-8992.jpg?semt=ais_hybrid&w=740&q=80" },
    { "id": 93, "name": "Wood Sculpture", "category": "Home Decor", "rating": 5, "price": 799, "image": "https://png.pngtree.com/png-vector/20240315/ourmid/pngtree-sculptures-expressions-in-wood-on-transparent-background-genrative-ai-png-image_11931767.png" },
    { "id": 94, "name": "Art Vase", "category": "Home Decor",  "rating": 4, "price": 349, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQlDdw1gcTn-WbV5u_bqfelCyDpTQkU026w&s" },
    { "id": 95, "name": "Metal Decor", "category": "Home Decor", "rating": 5, "price": 699, "image": "https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-silver-metallic-decorative-border-png-image_9994792.png" },

    { "id": 96, "name": "Beach Shirt", "category": "Clothing", "rating": 3, "price": 249, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkTZv0LqCfp5s139WEwuDLF4mg3SvjFPXZA&s" },
    { "id": 97, "name": "Formal Shoes", "category": "Clothing", "rating": 5, "price": 899, "image": "https://png.pngtree.com/png-vector/20240729/ourmid/pngtree-men-formal-shoes-png-image_13287455.png" },
    { "id": 98, "name": "Party Suit", "category": "Clothing", "rating": 4, "price": 950, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4W6NBntmFeU6LwNCl9rgT0Mxc4JKYMj6zg&s" },
    { "id": 99, "name": "Smart Glasses", "category": "Electronics",  "rating": 4, "price": 799, "image": "https://static.vecteezy.com/system/resources/previews/056/886/316/non_2x/smart-glasses-with-transparent-background-free-png.png" },
    { "id": 100, "name": "Ultra Tablet", "category": "Electronics",  "rating": 5, "price": 1000, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9w2_oxjhHrGmvnYif2PJrGCnBpiwcz3__w&s" }
  ]



export default Product;