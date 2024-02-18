<template>
	<div
		style="
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 1500px;
		"
	>
		<div style="width: 500px; height: 500px">
			<VueCropper
				style="width: 100%; height: 100%"
				ref="cropper"
				:img="option.img"
				:outputSize="option.outputSize"
				:outputType="option.outputType"
				:info="option.info"
				:canScale="option.canScale"
				:autoCrop="option.autoCrop"
				:autoCropWidth="option.autoCropWidth"
				:autoCropHeight="option.autoCropHeight"
				:fixedBox="option.fixedBox"
				:fixed="option.fixed"
				:fixedNumber="option.fixedNumber"
				:canMove="option.canMove"
				:canMoveBox="option.canMoveBox"
				:original="option.original"
				:centerBox="option.centerBox"
				:infoTrue="option.infoTrue"
				:full="option.full"
				:enlarge="option.enlarge"
				:mode="option.mode"
			>
			</VueCropper>
		</div>
		<n-space style="margin-top: 20px">
			<n-upload
				ref="uploadRef"
				action=""
				:default-upload="false"
				@change="handleChange"
				@before-upload="beforeUpload"
				v-if="props.mode === '1'"
			>
				<n-button type="primary">上传图片</n-button>
			</n-upload>
			<n-button
				type="primary"
				plain
				@click="getImgFromServer"
				style="margin-left: 20px"
				v-if="props.mode === '2'"
			>
				获取图片
			</n-button>
			<n-button
				type="primary"
				plain
				@click="rotateLeft"
				style="margin-left: 20px"
			>
				向左旋转
			</n-button>
			<n-button
				type="primary"
				plain
				@click="rotateRight"
				style="margin-left: 20px"
			>
				向右旋转
			</n-button>
			<n-button
				type="primary"
				plain
				@click="getCropDataBase64"
				style="margin-left: 20px"
			>
				查看截取的图片
			</n-button>
			<n-button
				type="primary"
				plain
				@click="onSubmit"
				style="margin-left: 20px"
			>
				提交图片
			</n-button>
		</n-space>
		<n-space>
			<div>截取的图片部分：</div>
			<div style="width: 300px; height: 500px">
				<!-- 若图片只设置宽度，可以保持等比例展示图片 -->
				<img :src="imgUrl" style="width: 100%" />
			</div>
		</n-space>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import "vue-cropper/dist/index.css";
import { VueCropper } from "vue-cropper";
import { useMessage } from "naive-ui";

const cropper = ref();
const option = reactive({
	img: "", // 裁剪图片的地址 url 地址, base64, blob
	outputSize: 1, // 裁剪生成图片的质量
	outputType: "jpeg", // 裁剪生成图片的格式 jpeg, png, webp
	info: true, // 裁剪框的大小信息
	canScale: false, // 图片是否允许滚轮缩放
	autoCrop: true, // 是否默认生成截图框
	autoCropWidth: 150, // 默认生成截图框宽度
	autoCropHeight: 150, // 默认生成截图框高度
	fixedBox: false, // 固定截图框大小 不允许改变
	fixed: false, // 是否开启截图框宽高固定比例，这个如果设置为true，截图框会是固定比例缩放的，如果设置为false，则截图框的狂宽高比例就不固定了
	fixedNumber: [1, 1], // 截图框的宽高比例 [ 宽度 , 高度 ]
	canMove: true, // 上传图片是否可以移动
	canMoveBox: true, // 截图框能否拖动
	original: false, // 上传图片按照原始比例渲染
	centerBox: true, // 截图框是否被限制在图片里面
	infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
	full: true, // 是否输出原图比例的截图
	enlarge: "1", // 图片根据截图框输出比例倍数
	mode: "contain", // 图片默认渲染方式 contain , cover, 100px, 100% auto
});
const uploadRef = ref(null);
const imgUrl = ref("");
const message = useMessage();
const props = defineProps(["mode", "type"]);

// 上传逻辑
const handleChange = (options: any) => {
	option.img = URL.createObjectURL(
		new Blob([options.file.file], { type: "image/jpeg" }),
	);
};

// 向左旋转图片
const rotateLeft = () => {
	cropper.value.rotateLeft();
};

// 向右旋转
const rotateRight = () => {
	cropper.value.rotateRight();
};

// 获取图片
const getCropDataBase64 = () => {
	cropper.value.getCropData((data: any) => {
		imgUrl.value = data;
	});
};

// 限制上传的内容
const beforeUpload = async (data: any) => {
	if (data.file.file?.type !== "image/jpeg") {
		message.error("只能上传jpeg格式的图片文件, 请重新上传");
		return false;
	}
	return true;
};

// 上传图片
const onSubmit = async () => {
	console.log(props.type);
};

// 获取服务器的图片
const getImgFromServer = async () => {};
</script>
