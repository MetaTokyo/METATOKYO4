import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script2 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const ent = new Entity('ent')
engine.addEntity(ent)
ent.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(11.901684761047363, 0, 31.60713768005371),
  rotation: new Quaternion(-3.6167044768667216e-15, -0.7071068286895752, 8.42937097900176e-8, -0.7071068286895752),
  scale: new Vector3(0.7419493198394775, 0.7419483661651611, 0.7487261295318604)
})
ent.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("28570566-60aa-40f8-8163-30796916da6d/ent.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
ent.addComponentOrReplace(gltfShape)

const road = new Entity('road')
engine.addEntity(road)
road.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(35.33897399902344, 0, 10.540372848510742),
  rotation: new Quaternion(-2.1677821992712506e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.6536110639572144, 0.6686666011810303, 0.7465206384658813)
})
road.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("329c7a2f-3a0b-4bb0-9822-47cd770a052a/road.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
road.addComponentOrReplace(gltfShape2)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(32.93959045410156, 0.40730512142181396, 27.063173294067383),
  rotation: new Quaternion(-1.7911824570760425e-15, 0.7071068286895752, -8.429368136830817e-8, 0.7071067094802856),
  scale: new Vector3(1.0000022649765015, 1, 1.0000022649765015)
})
externalLink.addComponentOrReplace(transform4)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(33.108131408691406, 1.0937623977661133, 26.294485092163086),
  rotation: new Quaternion(-3.260261789475561e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067094802856),
  scale: new Vector3(1.8090806007385254, 1.2060446739196777, 1.2060524225234985)
})
imageFromURL.addComponentOrReplace(transform5)

const glossyAethereaTiles = new Entity('glossyAethereaTiles')
engine.addEntity(glossyAethereaTiles)
glossyAethereaTiles.setParent(_scene)
const gltfShape3 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
glossyAethereaTiles.addComponentOrReplace(gltfShape3)
const transform6 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles.addComponentOrReplace(transform6)

const glossyAethereaTiles2 = new Entity('glossyAethereaTiles2')
engine.addEntity(glossyAethereaTiles2)
glossyAethereaTiles2.setParent(_scene)
glossyAethereaTiles2.addComponentOrReplace(gltfShape3)
const transform7 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles2.addComponentOrReplace(transform7)

const glossyAethereaTiles3 = new Entity('glossyAethereaTiles3')
engine.addEntity(glossyAethereaTiles3)
glossyAethereaTiles3.setParent(_scene)
glossyAethereaTiles3.addComponentOrReplace(gltfShape3)
const transform8 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles3.addComponentOrReplace(transform8)

const glossyAethereaTiles4 = new Entity('glossyAethereaTiles4')
engine.addEntity(glossyAethereaTiles4)
glossyAethereaTiles4.setParent(_scene)
glossyAethereaTiles4.addComponentOrReplace(gltfShape3)
const transform9 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles4.addComponentOrReplace(transform9)

const glossyAethereaTiles5 = new Entity('glossyAethereaTiles5')
engine.addEntity(glossyAethereaTiles5)
glossyAethereaTiles5.setParent(_scene)
glossyAethereaTiles5.addComponentOrReplace(gltfShape3)
const transform10 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles5.addComponentOrReplace(transform10)

const glossyAethereaTiles6 = new Entity('glossyAethereaTiles6')
engine.addEntity(glossyAethereaTiles6)
glossyAethereaTiles6.setParent(_scene)
glossyAethereaTiles6.addComponentOrReplace(gltfShape3)
const transform11 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles6.addComponentOrReplace(transform11)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(1.9298900365829468, 0.5088427066802979, 22.739776611328125),
  rotation: new Quaternion(-1.4864560015542035e-15, -7.450580596923828e-9, -4.440892098500626e-15, 1),
  scale: new Vector3(1.6024905443191528, 1.0214128494262695, 1.8090777397155762)
})
imageFromURL2.addComponentOrReplace(transform12)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(externalLink, {"url":"https://metatokyo.xyz/"}, createChannel(channelId, externalLink, channelBus))
script2.spawn(imageFromURL, {"image":"https://static.wixstatic.com/media/ebffef_34b695dc6bcd4448a66b09b460b24b46~mv2.png"}, createChannel(channelId, imageFromURL, channelBus))
script2.spawn(imageFromURL2, {"image":"https://static.wixstatic.com/media/ebffef_34b695dc6bcd4448a66b09b460b24b46~mv2.png"}, createChannel(channelId, imageFromURL2, channelBus))