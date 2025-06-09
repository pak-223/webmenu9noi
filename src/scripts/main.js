// Hardcoded menu items data based on the provided image, ordered by category and ID.
// Descriptions are based on previous content or general understanding if not specified.
const menuItems = [
    // Category: กะเพรา | 打抛饭
    {
        id: 'A10',
        name: 'กะเพราหมูสับ',
        chineseName: '打拋猪肉末飯',
        price: 60,
        category: 'กะเพรา | 打抛饭',
        description: 'หมูสับผัดร้อนกับพริกและกระเพรา รสชาติจัดจ้าน หอมกลิ่นกระเพรา',
        image: 'https://d1sag4ddilekf6.cloudfront.net/item/THITE20250607101829081858/photos/90c609683c5746bbb33c07d09e706a0b_1749291509094445301.jpeg',
    },
    {
        id: 'A20',
        name: 'กะเพราหมูชิ้น',
        chineseName: '打拋猪肉片飯',
        price: 60,
        category: 'กะเพรา | 打抛饭',
        description: 'หมูชิ้นสไลซ์หนา ผัดกับพริกขี้หนูและกระเพรา เพิ่มรสเผ็ดร้อนเค็มกลมกล่อม',
        image: 'https://d1sag4ddilekf6.cloudfront.net/item/THITE20250607101828075733/photos/a1c15920c62744bb87f0add8dc9b240b_1749291508901628367.jpeg',
    },
    {
        id: 'A30',
        name: 'กะเพราเนื้อสับ ดรายเอจพรีเมียม',
        chineseName: '优质干式熟成罗勒牛肉碎',
        price: 99,
        category: 'กะเพรา | 打抛饭',
        description: 'กะเพราเนื้อสับ ดรายเอจพรีเมียม รสเข้มข้น ให้รสชาติเนื้อเนียน ๆ ผสานความเผ็ดร้อนและกลิ่นหอมของใบกะเพรา',
        image: 'https://d1sag4ddilekf6.cloudfront.net/item/THITE20250607101829098489/photos/3304eaf7086c44ca8160d9a35e1bdb7c_1749291509277542087.jpeg',
    },
    {
        id: 'A40',
        name: 'กะเพรากุ้ง',
        chineseName: '打拋虾仁飯',
        price: 65,
        category: 'กะเพรา | 打拋饭',
        description: 'กุ้งสดเด้งผัดกับพริกขี้หนูและกระเพรา มอบรสเผ็ดร้อนและกลิ่นหอมของสมุนไพรไทย',
        image: 'https://d1sag4ddilekf6.cloudfront.net/item/THITE20250607101829103154/photos/e50bc49d0bad4c69b45aa0930583e692_1749291509433736279.jpeg',
    },
    {
        id: 'A50',
        name: 'กะเพราหมึก',
        chineseName: '打拋鱿鱼飯',
        price: 65,
        category: 'กะเพรา | 打抛饭',
        description: 'หมึกสดกรอบผัดกระเพรารสจัด ราดด้วยน้ำมันหอยเล็กน้อย เพิ่มรสกลมกล่อมและความหอมของกระเพรา',
        image: 'https://d1sag4ddilekf6.cloudfront.net/item/THITE20250607101829112940/photos/cf4cac4a97404815b6f68d57a716dcdb_1749291509586307764.jpeg',
    },
    {
        id: 'A60',
        name: 'กะเพราทะเลรวม',
        chineseName: '打拋海鮮飯',
        price: 65,
        category: 'กะเพรา | 打抛饭',
        description: 'รวมซีฟู้ดสด ทั้งกุ้ง หมึก และหอย ปรุงรสเข้มข้นกับพริกและกระเพรา ให้รสชาติทะเลหอมกรุ่น',
        image: 'https://d1sag4ddilekf6.cloudfront.net/item/THITE20250607101829120496/photos/a537449c0c79412a9446f4dc938e1724_1749291509766172777.jpeg',
    },

    // Category: สปาเก็ตตี้กะเพรา | 蒜蓉炒意面
    {
        id: 'B10',
        name: 'สปาเก็ตตี้กะเพราหมูสับ',
        chineseName: '蒜蓉猪肉末意面',
        price: 129,
        category: 'สปาเก็ตตี้กะเพรา | 蒜蓉炒意面',
        description: 'เส้นสปาเก็ตตี้ผัดกับหมูสับและกระเพรา รสจัด เผ็ดร้อน เคล้ากลิ่นหอมของสมุนไพร',
        image: 'https://d1sag4ddilekf6.cloudfront.net/item/THITE20250607101830142460/photos/c2358496f1f44fa99d8ef8fec16e70c6_1749291510140832547.jpeg',
    },
    {
        id: 'B20',
        name: 'สปาเก็ตตี้กะเพราเบคอน',
        chineseName: '蒜蓉培根意面',
        price: 139,
        category: 'สปาเก็ตตี้กะเพรา | 蒜蓉炒意面',
        description: 'สปาเก็ตตี้เส้นเหนียวนุ่ม ผัดกับเบคอนกรอบพริกขี้หนูและใบกะเพรา รสจัดจ้านกลมกล่อม',
        image: 'https://d1sag4ddilekf6.cloudfront.net/item/THITE20250607101830136048/photos/c5c13942080f4163933307f52a24b219_1749291510017200586.jpeg',
    },
    {
        id: 'B30',
        name: 'สปาเก็ตตี้กะเพราเนื้อสับ',
        chineseName: '牛肉蒜蓉意大利面',
        price: 139,
        category: 'สปาเก็ตตี้กะเพรา | 蒜蓉炒意面',
        description: 'เส้นสปาเก็ตตี้ผัดกับเนื้อสับพริกขี้หนูและกระเพรา มอบรสจัดจ้านและกลิ่นหอมของสมุนไพรไทย',
        image: 'https://food-cms.grab.com/compressed_webp/items/THITE2025060818072098264/detail/menueditor_item_613b0d3e16594075b7d491c80468f182_1749405805842677085.webp', // Updated image URL
    },
    {
        id: 'B40',
        name: 'สปาเก็ตตี้กะเพรากุ้ง',
        chineseName: '蒜蓉虾仁意面',
        price: 139,
        category: 'สปาเก็ตตี้กะเพรา | 蒜蓉炒意面',
        description: 'เส้นสปาเก็ตตี้ผัดกับกุ้งสดพริกขี้หนูและกระเพรา มอบรสจัดจ้านและกลิ่นหอมทะเล',
        image: 'https://d1sag4ddilekf6.cloudfront.net/item/THITE20250607101830155451/photos/3ec3d4b3b22f47c09c9c03317276e98e_1749291510388832728.jpeg',
    },
    {
        id: 'B50',
        name: 'สปาเก็ตตี้กะเพราหมึก',
        chineseName: '蒜蓉鱿鱼意面',
        price: 139,
        category: 'สปาเก็ตตี้กะเพรา | 蒜蓉炒意面',
        description: 'สปาเก็ตตี้คลุกเคล้ากับหมึกสดและกระเพรา รสจัดจ้าน หวานนิดเค็มหน่อย กลิ่นหอมสมุนไพร',
        image: 'https://d1sag4ddilekf6.cloudfront.net/item/THITE20250607101830162409/photos/38258fab3cb74ebaa3299207a82d771a_1749291510584447361.jpeg',
    },
    {
        id: 'B60',
        name: 'สปาเก็ตตี้กะเพราทะเลรวม',
        chineseName: '蒜蓉海鲜意面',
        price: 139,
        category: 'สปาเก็ตตี้กะเพรา | 蒜蓉炒意面',
        description: 'สปาเก็ตตี้รวมซีฟู้ด ผัดกะเพรารสจัด เคล้ากลิ่นหอมทะเลและใบกะเพรา',
        image: 'https://d1sag4ddilekf6.cloudfront.net/item/THITE20250607101830178652/photos/5a329a1bfb644082a5daaf70f56c6b95_1749291510756808485.jpeg',
    },

    // Category: ข้าวไข่ข้น ทอดกระเทียม | 蒜蓉滑蛋饭
    {
        id: 'C10',
        name: 'ข้าวไข่ข้นหมูชิ้นทอดกระเทียม',
        chineseName: '蒜蓉滑蛋配香脆猪肉片',
        price: 79,
        category: 'ข้าวไข่ข้น ทอดกระเทียม | 蒜蓉滑蛋饭',
        description: 'ข้าวหอมมะลิ นุ่มราดด้วยไข่ข้นเนียน ๆ ท็อปด้วยหมูชิ้นทอดกรอบ ราดด้วยกระเทียมเจียวหอม ๆ ให้รสกลมกล่อมลงตัว',
        image: 'https://food-cms.grab.com/item/THITE20250607101827015838/photos/5cb10df83786464b9991a95331cf22a6_1749291507846057663.jpeg',
    },
    {
        id: 'C20',
        name: 'ข้าวไข่ข้นหมูสับทอดกระเทียม',
        chineseName: '蒜蓉滑蛋配猪肉末',
        price: 79,
        category: 'ข้าวไข่ข้น ทอดกระเทียม | 蒜蓉滑蛋饭',
        description: 'ข้าวหอมมะลิ่นุ่มราดไข่ข้นลื่นกลมกล่อม เสิร์ฟพร้อมหมูสับทอดกระเทียมหอมกรอบ เพิ่มมิติความอร่อย',
        image: 'https://food-cms.grab.com/item/THITE20250607101827023617/photos/4918d7e8f5e74775be9ad61febd36ce9_1749291508000517172.jpeg',
    },
    {
        id: 'C30',
        name: 'ข้าวไข่ข้นสามชั้นทอดกระเทียม',
        chineseName: '蒜蓉滑蛋配五花肉',
        price: 85,
        category: 'ข้าวไข่ข้น ทอดกระเทียม | 蒜蓉滑蛋饭',
        description: 'ข้าวหอมมะลิร้อน ๆ ราดไข่ข้นเนียนนุ่ม พร้อมสามชั้นหมูทอดกระเทียมกรอบมัน ผสมผสานรสเค็มหวานอย่างลงตัว',
        image: 'https://food-cms.grab.com/item/THITE20250607101828030835/photos/f839283ea70146cd9df90660a0602395_1749291508172427363.jpeg',
    },
    {
        id: 'C40',
        name: 'ข้าวไข่ข้นเบคอนทอดกระเทียม',
        chineseName: '蒜蓉滑蛋配培根',
        price: 85,
        category: 'ข้าวไข่ข้น ทอดกระเทียม | 蒜蓉滑蛋饭',
        description: 'ไข่ข้นเนื้อเนียนราดบนข้าวหอมมะลิ เสิร์ฟพร้อมเบคอนทอดกรอบ ราดกระเทียมเจียวหอมฉุย',
        image: 'https://food-cms.grab.com/item/THITE20250607101828047027/photos/e67d20f2366e4fe09065b6651b8426a7_1749291508291199328.jpeg',
    },
    {
        id: 'C50',
        name: 'ข้าวไข่ข้นกุ้งทอดกระเทียม',
        chineseName: '蒜蓉滑蛋配虾仁',
        price: 85,
        category: 'ข้าวไข่ข้น ทอดกระเทียม | 蒜蓉滑蛋饭',
        description: 'ไข่ข้นเนียนลื่นผสานบนข้าวหอมมะลิ เสิร์ฟพร้อมกุ้งทอดกระเทียม ให้รสชาติหวานมันเค็มกรอบอย่างลงตัว',
        image: 'https://food-cms.grab.com/item/THITE20250607101828059916/photos/64b3a1c4348c48acad1c5bef0602b09c_1749291508460521618.jpeg',
    },
    {
        id: 'C60',
        name: 'ข้าวไข่ข้นหมึกทอดกระเทียม',
        chineseName: '蒜蓉滑蛋配鱿鱼',
        price: 85,
        category: 'ข้าวไข่ข้น ทอดกระเทียม | 蒜蓉滑蛋饭',
        description: 'ข้าวหอมมะลิร้อน ๆ กับไข่ข้นเนียนนุ่ม ท็อปด้วยหมึกทอดกระเทียมหอมกรอบ มอบประสบการณ์รสชาติใหม่',
        image: 'https://food-cms.grab.com/compressed_webp/items/THITE20250607101828064013/detail/d20f4774f46c4aefa51fce242bee0f80_1749291508736290122.webp', // Updated image URL
    },

    // Category: ข้าวห่อหมกไข่ข้น | 咖喱滑蛋饭
    {
        id: 'E10',
        name: 'ข้าวห่อหมกไข่ข้นทะเล',
        chineseName: '咖喱滑蛋配海鲜咖喱饭',
        price: 85,
        category: 'ข้าวห่อหมกไข่ข้น | 咖喱滑蛋饭',
        description: 'ข้าวหอมมะลิห่อด้วยไข่ข้น สอดไส้ทะเลรวม หวานมัน เผ็ดกลมกล่อม ได้กลิ่นเครื่องแกงใต้',
        image: 'https://food-cms.grab.com/item/THITE20250607101831205466/photos/fd78335aab7d47f786e53bf3d46bbe8f_1749291511304272485.jpeg',
    },
    {
        id: 'E20',
        name: 'ข้าวห่อหมกไข่ข้นกุ้ง',
        chineseName: '咖喱滑蛋配虾仁咖喱饭',
        price: 85,
        category: 'ข้าวห่อหมกไข่ข้น | 咖喱滑蛋饭',
        description: 'ข้าวหอมมะลิห่อด้วยไข่ข้นห่อด้วยไข่ข้นรสเข้ม เสิร์ฟพร้อมห่อหมกกุ้งเนื้อแน่น เผ็ดนิด ๆ หวานมัน',
        image: 'https://food-cms.grab.com/item/THITE20250607101830184557/photos/73a40c4bbd5c4ee29db93587ec2cac7a_1749291510941373744.jpeg',
    },
    {
        id: 'E30',
        name: 'ข้าวห่อหมกไข่ข้นหมึก',
        chineseName: '咖喱滑蛋配鱿鱼咖喱饭',
        price: 85,
        category: 'ข้าวห่อหมกไข่ข้น | 咖喱滑蛋饭',
        description: 'ข้าวหอมมะลิห่อด้วยไข่ข้นเนียนนุ่ม ท็อปด้วยห่อหมกหมึก รสเผ็ดกลมกล่อม กลิ่นแกงใต้หอมชวนกิน',
        image: 'https://food-cms.grab.com/item/THITE20250607101831190487/photos/90d50de0edba452c9d64dbb617786a5f_1749291511138963222.jpeg',
    },

    // Category: ผลไม้พร้อมทาน | 鲜切水果
    {
        id: 'H10',
        name: 'ผลไม้สดพร้อมทาน 4 ชนิด',
        chineseName: '四种时令鲜果拼盘',
        price: 59,
        category: 'ผลไม้พร้อมทาน | 鲜切水果',
        description: 'รวมผลไม้สดฉ่ำฉ่ำ 4 ชนิด จะเป็นผลไม้ตามฤดูกาล โดยผลไม้แต่ละวันจะแตกต่างกันไป',
        image: 'https://food-cms.grab.com/item/THITE20250607101831216126/photos/menueditor_item_18a3a6f16efb4bd79be4d7b98d2f5c2f_1749292024418570039.jpg',
    },
    {
        id: 'H20',
        name: 'ส้มแมนดาริน',
        chineseName: '鲜橘子',
        price: 55,
        category: 'ผลไม้พร้อมทาน | 鲜切水果',
        description: 'ส้มแมนดาริน สดๆ สะอาด ปอกให้พร้อมทาน',
        image: 'https://food-cms.grab.com/item/THITE20250607101831246086/photos/menueditor_item_a9580fa2ada142faac6d223b3d4b3b64_1749291856673071005.jpg',
    },
    {
        id: 'H30',
        name: 'แตงโม',
        chineseName: '鲜西瓜',
        price: 55,
        category: 'ผลไม้พร้อมทาน | 鲜切水果',
        description: 'แตงโม อร่อย ฉ่ำ ปอกพร้อมทาน',
        image: 'https://food-cms.grab.com/item/THITE20250607101831238923/photos/menueditor_item_39b7461e42ff4e87a4134fe63061f934_1749291912589335319.jpg',
    },
    {
        id: 'H40',
        name: 'แอปเปิ้ล',
        chineseName: '鲜苹果',
        price: 55,
        category: 'ผลไม้พร้อมทาน | 鲜切水果',
        description: 'แอปเปิ้ลสด สีสันสวยงาม หวานกรอบพร้อมทาน',
        image: 'https://food-cms.grab.com/item/THITE20250607101831221627/photos/menueditor_item_6d29a27014164ed2a2fc11ae95a9d4e1_1749291967774949322.jpg',
    },
    {
        id: 'H50',
        name: 'ฝรั่งกิมจู',
        chineseName: '鲜芭乐 (青)',
        price: 55,
        category: 'ผลไม้พร้อมทาน | 鲜切水果',
        description: 'ฝรั่งกิมจูสดๆ กรอบ อร่อย ปอกพร้อมทาน',
        image: 'https://food-cms.grab.com/item/THITE20250607101831250967/photos/menueditor_item_c283b76ac5944f728eb51b76fcebdaff_1749291786310643903.jpg',
    },
    {
        id: 'H60',
        name: 'แก้วมังกร',
        chineseName: '鲜火龙果',
        price: 55,
        category: 'ผลไม้พร้อมทาน | 鲜切水果',
        description: 'แก้วมังกรสด หวานฉ่ำ พร้อมทานสะดวก',
        image: 'https://food-cms.grab.com/compressed_webp/items/THITE2025060818192913160/detail/menueditor_item_9409b16462414e56b2120e5f31f2bdb2_1749406669988455989.webp', // Placeholder
    },

    // Category: เครื่องดื่ม | 饮品
    {
        id: 'D01',
        name: 'น้ำเก๊กฮวย',
        chineseName: '菊花茶',
        price: 'ยังไม่พร้อมจำหน่าย',
        category: 'เครื่องดื่ม | 饮品',
        description: 'น้ำเก๊กฮวยหอมชื่นใจ ดับกระหาย',
        image: 'https://placehold.co/280x160/F3F4F6/9CA3AF?text=Chrysanthemum+Tea', // Placeholder
    },
    {
        id: 'D02',
        name: 'ชาเขียว',
        chineseName: '绿奶茶',
        price: 'ยังไม่พร้อมจำหน่าย',
        category: 'เครื่องดื่ม | 饮品',
        description: 'ชาเขียวรสกลมกล่อม หอมสดชื่น',
        image: 'https://placehold.co/280x160/F3F4F6/9CA3AF?text=Green+Tea', // Placeholder
    },
    {
        id: 'D03',
        name: 'ชาไทย',
        chineseName: '泰式奶茶',
        price: 'ยังไม่พร้อมจำหน่าย',
        category: 'เครื่องดื่ม | 饮品',
        description: 'ชาไทยรสชาติเข้มข้น หอมหวาน ชื่นใจ',
        image: 'https://placehold.co/280x160/F3F4F6/9CA3AF?text=Thai+Tea', // Placeholder
    },
    {
        id: 'D04',
        name: 'น้ำกะเจียบ',
        chineseName: '洛神花茶',
        price: 'ยังไม่พร้อมจำหน่าย',
        category: 'เครื่องดื่ม | 饮品',
        description: 'น้ำกะเจียบหอมกลิ่นดอกไม้ ดื่มแล้วสดชื่น',
        image: 'https://placehold.co/280x160/F3F4F6/9CA3AF?text=Roselle+Juice', // Placeholder
    }
];

const toppings = [
    { name: 'ไข่ดาว', price: 10 },
    { name: 'ไข่เจียว', price: 10 },
    { name: 'ไข่ข้น สองฟอง', price: 20 },
];

let searchTerm = '';
const order = [];
let currentItemId = null;

function updateOrderButton() {
    const btn = document.getElementById('viewOrderBtn');
    const count = order.reduce((s, o) => s + o.qty, 0);
    btn.textContent = count > 0 ? `ดูสรุป (${count})` : 'ดูสรุป';
    btn.classList.toggle('bg-green-600', count === 0);
    btn.classList.toggle('bg-red-500', count > 0);
}

function openToppingsModal(id) {
    currentItemId = id;
    const container = document.getElementById('toppingsList');
    container.innerHTML = toppings.map(t => `
        <label class="flex items-center space-x-2">
            <input type="checkbox" value="${t.name}" data-price="${t.price}" class="topping-checkbox">
            <span>${t.name} ฿${t.price}</span>
        </label>
    `).join('');
    document.getElementById('toppingsModal').classList.remove('hidden');
}

function closeToppingsModal() {
    document.getElementById('toppingsModal').classList.add('hidden');
}

function confirmToppings() {
    const selected = Array.from(document.querySelectorAll('.topping-checkbox:checked')).map(cb => ({
        name: cb.value,
        price: Number(cb.dataset.price)
    }));
    addToOrder(currentItemId, selected);
    closeToppingsModal();
}

function addToOrder(id, selectedToppings) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;
    const key = id + '|' + selectedToppings.map(t => t.name).sort().join('|');
    const existing = order.find(o => o.key === key);
    if (existing) {
        existing.qty += 1;
    } else {
        order.push({ key, item, qty: 1, toppings: selectedToppings });
    }
    updateOrderButton();
}

function openOrderModal() {
    renderOrderList();
    document.getElementById('orderModal').classList.remove('hidden');
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.add('hidden');
}

function increaseQty(index) {
    order[index].qty += 1;
    renderOrderList();
    updateOrderButton();
}

function decreaseQty(index) {
    if (order[index].qty > 1) {
        order[index].qty -= 1;
    } else {
        if (confirm('ลบรายการนี้หรือไม่?')) {
            order.splice(index, 1);
        }
    }
    renderOrderList();
    updateOrderButton();
}

function removeOrder(index) {
    if (confirm('ลบรายการนี้หรือไม่?')) {
        order.splice(index, 1);
        renderOrderList();
        updateOrderButton();
    }
}

function renderOrderList() {
    const list = document.getElementById('orderList');
    const totalEl = document.getElementById('orderTotal');
    list.innerHTML = '';
    let total = 0;
    order.forEach(({ item, qty, toppings }, index) => {
        const li = document.createElement('li');
        const itemPrice = typeof item.price === 'number' ? item.price : 0;
        const toppingPrice = (toppings || []).reduce((s, t) => s + t.price, 0);
        const toppingText = (toppings || []).map(t => t.name).join(', ');
        li.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <span class="font-medium">${item.id}</span> ${item.name}${toppingText ? ' [' + toppingText + ']' : ''}
                    <div class="text-xs text-gray-500">฿${itemPrice} + ฿${toppingPrice}</div>
                </div>
                <div class="flex items-center space-x-1">
                    <button onclick="decreaseQty(${index})" class="px-2 bg-gray-200 rounded">-</button>
                    <span>${qty}</span>
                    <button onclick="increaseQty(${index})" class="px-2 bg-gray-200 rounded">+</button>
                    <button onclick="removeOrder(${index})" class="px-2 text-red-600">×</button>
                </div>
            </div>`;
        total += (itemPrice + toppingPrice) * qty;
        list.appendChild(li);
    });
    totalEl.textContent = `รวม ${total} บาท`;
}

function shareOrderText() {
    renderOrderList();
    const totalText = document.getElementById('orderTotal').textContent;
    let text = '📋 สรุปออเดอร์\n';
    order.forEach(({ item, qty, toppings }) => {
        const toppingPrice = (toppings || []).reduce((s, t) => s + t.price, 0);
        const itemPrice = typeof item.price === 'number' ? item.price : 0;
        const priceText = `฿${(itemPrice + toppingPrice) * qty}`;
        const toppingText = (toppings || []).map(t => t.name).join(', ');
        text += `🔹 ${item.id} ${item.name}${toppingText ? ' [' + toppingText + ']' : ''} x${qty} ${priceText}\n`;
    });
    text += `💰${totalText}`;
    const encoded = encodeURIComponent(text);
    if (/Line/i.test(navigator.userAgent)) {
        window.location.href = `line://oaMessage/@kpnn/?${encoded}`;
    } else {
        navigator.clipboard.writeText(text).then(() => alert('คัดลอกสรุปแล้ว'));
    }
}

function downloadOrderImage() {
    html2canvas(document.getElementById('orderSummary')).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'order-summary.png';
        link.click();
    });
}

// Function to render a single menu item HTML card
function renderMenuItemCard(item) {
    // Determine the display name: Thai if Chinese not present, else both
    const displayName = item.chineseName ? `${item.name} / ${item.chineseName}` : item.name;

    return `
        <div class="menu-card bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden transform transition-transform duration-200 hover:scale-105">
            <div class="p-2">
                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="w-full h-32 object-cover rounded-md mb-3"
                    onerror="this.onerror=null;this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNNTAgNjVMNDAgNDBINjBMNTAgNjVaIiBmaWxsPSIjOUNBM0FGIi8+PC9zdmc+';"
                />
                <div class="flex items-center justify-between mb-1">
                    <h3 class="font-semibold text-gray-900 text-base leading-tight line-clamp-2">${displayName}</h3>
                    <span class="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">${item.id}</span>
                </div>
                <p class="text-gray-600 text-xs mb-2 line-clamp-2">${item.description}</p>
                <div class="flex items-center justify-between mt-auto">
                    <span class="text-lg font-bold text-green-600">${typeof item.price === 'number' ? '฿' + item.price : item.price}</span>
                    <button onclick="openToppingsModal('${item.id}')" class="ml-2 bg-green-500 text-white px-2 py-1 rounded text-sm">เพิ่ม</button>
                </div>
            </div>
        </div>
    `;
}

// Function to display menu sections with horizontal scrolling
function displayMenuSections() {
    const container = document.getElementById('menuSectionsContainer');
    if (!container) return;

    searchTerm = document.getElementById('searchTerm').value.toLowerCase();

    // Filter all menu items first based on the search term
    const globallyFilteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        (item.chineseName && item.chineseName.toLowerCase().includes(searchTerm)) || // Search Chinese name
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.id.toLowerCase().includes(searchTerm) // Allow searching by ID
    );

    // Get unique categories from the filtered items, maintaining original order
    const orderedCategories = [
        'กะเพรา | 打抛饭',
        'สปาเก็ตตี้กะเพรา | 蒜蓉炒意面',
        'ข้าวไข่ข้น ทอดกระเทียม | 蒜蓉滑蛋饭',
        'ข้าวห่อหมกไข่ข้น | 咖喱滑蛋饭',
        'ผลไม้พร้อมทาน | 鲜切水果',
        'เครื่องดื่ม | 饮品'
    ];

    let htmlContent = '';
    let foundItems = false;

    orderedCategories.forEach(categoryName => {
        const itemsInCategory = globallyFilteredItems.filter(item => item.category === categoryName);
        
        if (itemsInCategory.length > 0) {
            foundItems = true;
            htmlContent += `
                <div class="category-section">
                    <h2 class="font-bold text-xl text-gray-900 mb-4 px-2">${categoryName}</h2>
                    <div class="flex overflow-x-auto space-x-4 pb-4 px-2 no-scrollbar">
                        ${itemsInCategory.map(renderMenuItemCard).join('')}
                    </div>
                </div>
            `;
        }
    });

    if (!foundItems) {
        htmlContent = `
            <div class="text-center py-20 text-gray-600">
                <p class="text-xl font-medium">ไม่พบเมนูที่คุณค้นหา</p>
                <p class="text-sm mt-2">ลองใช้คำค้นหาอื่น ๆ หรือเรียกดูหมวดหมู่ทั้งหมด</p>
            </div>
        `;
    }
    
    container.innerHTML = htmlContent;
}

// Initial render when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayMenuSections();
    updateOrderButton();
});
