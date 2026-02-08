/// <reference path="lua.d.ts" />
// Auto-generated typedefs for polytoria!
type Enums = typeof Enum;

interface EnumItem {}
interface Enum {}

interface Event<T extends Callback = Callback> {
	Connect(this: Event, callback: T): void;
	Disconnect(this: Event, callback: T): void;
}

declare namespace Enum {
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/AddonPermission/)
	 */
	export namespace AddonPermission {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/AddonPermission#IORead)
		 */
		export interface IORead extends globalThis.EnumItem {}
		export const IORead: IORead;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/AddonPermission#IOWrite)
		 */
		export interface IOWrite extends globalThis.EnumItem {}
		export const IOWrite: IOWrite;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/AddonPermission#ScriptSource)
		 */
		export interface ScriptSource extends globalThis.EnumItem {}
		export const ScriptSource: ScriptSource;
	}
	export type AddonPermission = AddonPermission.IORead | AddonPermission.IOWrite | AddonPermission.ScriptSource;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/AmbientSource/)
	 */
	export namespace AmbientSource {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/AmbientSource#Skybox)
		 */
		export interface Skybox extends globalThis.EnumItem {}
		export const Skybox: Skybox;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/AmbientSource#Color)
		 */
		export interface Color extends globalThis.EnumItem {}
		export const Color: Color;
	}
	export type AmbientSource = AmbientSource.Skybox | AmbientSource.Color;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BlendMode/)
	 */
	export namespace BlendMode {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BlendMode#Mix)
		 */
		export interface Mix extends globalThis.EnumItem {}
		export const Mix: Mix;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BlendMode#Add)
		 */
		export interface Add extends globalThis.EnumItem {}
		export const Add: Add;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BlendMode#Subtract)
		 */
		export interface Subtract extends globalThis.EnumItem {}
		export const Subtract: Subtract;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BlendMode#Multiply)
		 */
		export interface Multiply extends globalThis.EnumItem {}
		export const Multiply: Multiply;
	}
	export type BlendMode = BlendMode.Mix | BlendMode.Add | BlendMode.Subtract | BlendMode.Multiply;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInAudioPreset/)
	 */
	export namespace BuiltInAudioPreset {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInAudioPreset#Jump)
		 */
		export interface Jump extends globalThis.EnumItem {}
		export const Jump: Jump;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInAudioPreset#Explosion)
		 */
		export interface Explosion extends globalThis.EnumItem {}
		export const Explosion: Explosion;
	}
	export type BuiltInAudioPreset = BuiltInAudioPreset.Jump | BuiltInAudioPreset.Explosion;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CameraMode/)
	 */
	export namespace CameraMode {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CameraMode#Follow)
		 */
		export interface Follow extends globalThis.EnumItem {}
		export const Follow: Follow;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CameraMode#Free)
		 */
		export interface Free extends globalThis.EnumItem {}
		export const Free: Free;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CameraMode#Scripted)
		 */
		export interface Scripted extends globalThis.EnumItem {}
		export const Scripted: Scripted;
	}
	export type CameraMode = CameraMode.Follow | CameraMode.Free | CameraMode.Scripted;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CharacterAttachment/)
	 */
	export namespace CharacterAttachment {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CharacterAttachment#Head)
		 */
		export interface Head extends globalThis.EnumItem {}
		export const Head: Head;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CharacterAttachment#Torso)
		 */
		export interface Torso extends globalThis.EnumItem {}
		export const Torso: Torso;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CharacterAttachment#ShoulderRight)
		 */
		export interface ShoulderRight extends globalThis.EnumItem {}
		export const ShoulderRight: ShoulderRight;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CharacterAttachment#ShoulderLeft)
		 */
		export interface ShoulderLeft extends globalThis.EnumItem {}
		export const ShoulderLeft: ShoulderLeft;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CharacterAttachment#Waist)
		 */
		export interface Waist extends globalThis.EnumItem {}
		export const Waist: Waist;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CharacterAttachment#LegLeft)
		 */
		export interface LegLeft extends globalThis.EnumItem {}
		export const LegLeft: LegLeft;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CharacterAttachment#LegRight)
		 */
		export interface LegRight extends globalThis.EnumItem {}
		export const LegRight: LegRight;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CharacterAttachment#FootLeft)
		 */
		export interface FootLeft extends globalThis.EnumItem {}
		export const FootLeft: FootLeft;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CharacterAttachment#FootRight)
		 */
		export interface FootRight extends globalThis.EnumItem {}
		export const FootRight: FootRight;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CharacterAttachment#HandLeft)
		 */
		export interface HandLeft extends globalThis.EnumItem {}
		export const HandLeft: HandLeft;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CharacterAttachment#HandRight)
		 */
		export interface HandRight extends globalThis.EnumItem {}
		export const HandRight: HandRight;
	}
	export type CharacterAttachment =
		| CharacterAttachment.Head
		| CharacterAttachment.Torso
		| CharacterAttachment.ShoulderRight
		| CharacterAttachment.ShoulderLeft
		| CharacterAttachment.Waist
		| CharacterAttachment.LegLeft
		| CharacterAttachment.LegRight
		| CharacterAttachment.FootLeft
		| CharacterAttachment.FootRight
		| CharacterAttachment.HandLeft
		| CharacterAttachment.HandRight;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ClientPlatform/)
	 */
	export namespace ClientPlatform {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ClientPlatform#Desktop)
		 */
		export interface Desktop extends globalThis.EnumItem {}
		export const Desktop: Desktop;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ClientPlatform#Mobile)
		 */
		export interface Mobile extends globalThis.EnumItem {}
		export const Mobile: Mobile;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ClientPlatform#VR)
		 */
		export interface VR extends globalThis.EnumItem {}
		export const VR: VR;
	}
	export type ClientPlatform = ClientPlatform.Desktop | ClientPlatform.Mobile | ClientPlatform.VR;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CreatorToolMode/)
	 */
	export namespace CreatorToolMode {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CreatorToolMode#Select)
		 */
		export interface Select extends globalThis.EnumItem {}
		export const Select: Select;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CreatorToolMode#Move)
		 */
		export interface Move extends globalThis.EnumItem {}
		export const Move: Move;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CreatorToolMode#Rotate)
		 */
		export interface Rotate extends globalThis.EnumItem {}
		export const Rotate: Rotate;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CreatorToolMode#Scale)
		 */
		export interface Scale extends globalThis.EnumItem {}
		export const Scale: Scale;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CreatorToolMode#Paint)
		 */
		export interface Paint extends globalThis.EnumItem {}
		export const Paint: Paint;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CreatorToolMode#Brush)
		 */
		export interface Brush extends globalThis.EnumItem {}
		export const Brush: Brush;
	}
	export type CreatorToolMode =
		| CreatorToolMode.Select
		| CreatorToolMode.Move
		| CreatorToolMode.Rotate
		| CreatorToolMode.Scale
		| CreatorToolMode.Paint
		| CreatorToolMode.Brush;
	export namespace ToolMode {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ToolMode#Select)
		 */
		export interface Select extends globalThis.EnumItem {}
		export const Select: Select;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ToolMode#Move)
		 */
		export interface Move extends globalThis.EnumItem {}
		export const Move: Move;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ToolMode#Rotate)
		 */
		export interface Rotate extends globalThis.EnumItem {}
		export const Rotate: Rotate;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ToolMode#Scale)
		 */
		export interface Scale extends globalThis.EnumItem {}
		export const Scale: Scale;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ToolMode#Paint)
		 */
		export interface Paint extends globalThis.EnumItem {}
		export const Paint: Paint;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ToolMode#Brush)
		 */
		export interface Brush extends globalThis.EnumItem {}
		export const Brush: Brush;
	}
	export type ToolMode =
		| ToolMode.Select
		| ToolMode.Move
		| ToolMode.Rotate
		| ToolMode.Scale
		| ToolMode.Paint
		| ToolMode.Brush;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/FontStyle/)
	 */
	export namespace FontStyle {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/FontStyle#Normal)
		 */
		export interface Normal extends globalThis.EnumItem {}
		export const Normal: Normal;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/FontStyle#Italic)
		 */
		export interface Italic extends globalThis.EnumItem {}
		export const Italic: Italic;
	}
	export type FontStyle = FontStyle.Normal | FontStyle.Italic;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/FontWeight/)
	 */
	export namespace FontWeight {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/FontWeight#Thin)
		 */
		export interface Thin extends globalThis.EnumItem {}
		export const Thin: Thin;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/FontWeight#ExtraLight)
		 */
		export interface ExtraLight extends globalThis.EnumItem {}
		export const ExtraLight: ExtraLight;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/FontWeight#Light)
		 */
		export interface Light extends globalThis.EnumItem {}
		export const Light: Light;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/FontWeight#Regular)
		 */
		export interface Regular extends globalThis.EnumItem {}
		export const Regular: Regular;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/FontWeight#Medium)
		 */
		export interface Medium extends globalThis.EnumItem {}
		export const Medium: Medium;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/FontWeight#SemiBold)
		 */
		export interface SemiBold extends globalThis.EnumItem {}
		export const SemiBold: SemiBold;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/FontWeight#Bold)
		 */
		export interface Bold extends globalThis.EnumItem {}
		export const Bold: Bold;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/FontWeight#ExtraBold)
		 */
		export interface ExtraBold extends globalThis.EnumItem {}
		export const ExtraBold: ExtraBold;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/FontWeight#Black)
		 */
		export interface Black extends globalThis.EnumItem {}
		export const Black: Black;
	}
	export type FontWeight =
		| FontWeight.Thin
		| FontWeight.ExtraLight
		| FontWeight.Light
		| FontWeight.Regular
		| FontWeight.Medium
		| FontWeight.SemiBold
		| FontWeight.Bold
		| FontWeight.ExtraBold
		| FontWeight.Black;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ForceMode/)
	 */
	export namespace ForceMode {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ForceMode#Force)
		 */
		export interface Force extends globalThis.EnumItem {}
		export const Force: Force;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ForceMode#Acceleration)
		 */
		export interface Acceleration extends globalThis.EnumItem {}
		export const Acceleration: Acceleration;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ForceMode#Impulse)
		 */
		export interface Impulse extends globalThis.EnumItem {}
		export const Impulse: Impulse;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ForceMode#VelocityChange)
		 */
		export interface VelocityChange extends globalThis.EnumItem {}
		export const VelocityChange: VelocityChange;
	}
	export type ForceMode = ForceMode.Force | ForceMode.Acceleration | ForceMode.Impulse | ForceMode.VelocityChange;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/GrabbablePermissionMode/)
	 */
	export namespace GrabbablePermissionMode {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/GrabbablePermissionMode#None)
		 */
		export interface None extends globalThis.EnumItem {}
		export const None: None;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/GrabbablePermissionMode#Everyone)
		 */
		export interface Everyone extends globalThis.EnumItem {}
		export const Everyone: Everyone;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/GrabbablePermissionMode#Scripted)
		 */
		export interface Scripted extends globalThis.EnumItem {}
		export const Scripted: Scripted;
	}
	export type GrabbablePermissionMode =
		| GrabbablePermissionMode.None
		| GrabbablePermissionMode.Everyone
		| GrabbablePermissionMode.Scripted;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/GradientImageFill/)
	 */
	export namespace GradientImageFill {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/GradientImageFill#Linear)
		 */
		export interface Linear extends globalThis.EnumItem {}
		export const Linear: Linear;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/GradientImageFill#Radial)
		 */
		export interface Radial extends globalThis.EnumItem {}
		export const Radial: Radial;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/GradientImageFill#Square)
		 */
		export interface Square extends globalThis.EnumItem {}
		export const Square: Square;
	}
	export type GradientImageFill = GradientImageFill.Linear | GradientImageFill.Radial | GradientImageFill.Square;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/HorizontalAlignment/)
	 */
	export namespace HorizontalAlignment {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/HorizontalAlignment#Left)
		 */
		export interface Left extends globalThis.EnumItem {}
		export const Left: Left;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/HorizontalAlignment#Center)
		 */
		export interface Center extends globalThis.EnumItem {}
		export const Center: Center;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/HorizontalAlignment#Right)
		 */
		export interface Right extends globalThis.EnumItem {}
		export const Right: Right;
	}
	export type HorizontalAlignment = HorizontalAlignment.Left | HorizontalAlignment.Center | HorizontalAlignment.Right;
	export namespace TextHorizontalAlignment {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextHorizontalAlignment#Left)
		 */
		export interface Left extends globalThis.EnumItem {}
		export const Left: Left;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextHorizontalAlignment#Center)
		 */
		export interface Center extends globalThis.EnumItem {}
		export const Center: Center;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextHorizontalAlignment#Right)
		 */
		export interface Right extends globalThis.EnumItem {}
		export const Right: Right;
	}
	export type TextHorizontalAlignment =
		| TextHorizontalAlignment.Left
		| TextHorizontalAlignment.Center
		| TextHorizontalAlignment.Right;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/HttpRequestMethod/)
	 */
	export namespace HttpRequestMethod {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/HttpRequestMethod#Get)
		 */
		export interface Get extends globalThis.EnumItem {}
		export const Get: Get;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/HttpRequestMethod#Post)
		 */
		export interface Post extends globalThis.EnumItem {}
		export const Post: Post;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/HttpRequestMethod#Put)
		 */
		export interface Put extends globalThis.EnumItem {}
		export const Put: Put;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/HttpRequestMethod#Delete)
		 */
		export interface Delete extends globalThis.EnumItem {}
		export const Delete: Delete;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/HttpRequestMethod#Patch)
		 */
		export interface Patch extends globalThis.EnumItem {}
		export const Patch: Patch;
	}
	export type HttpRequestMethod =
		| HttpRequestMethod.Get
		| HttpRequestMethod.Post
		| HttpRequestMethod.Put
		| HttpRequestMethod.Delete
		| HttpRequestMethod.Patch;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ImageStretchMode/)
	 */
	export namespace ImageStretchMode {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ImageStretchMode#Stretch)
		 */
		export interface Stretch extends globalThis.EnumItem {}
		export const Stretch: Stretch;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ImageStretchMode#Centered)
		 */
		export interface Centered extends globalThis.EnumItem {}
		export const Centered: Centered;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ImageStretchMode#Covered)
		 */
		export interface Covered extends globalThis.EnumItem {}
		export const Covered: Covered;
	}
	export type ImageStretchMode = ImageStretchMode.Stretch | ImageStretchMode.Centered | ImageStretchMode.Covered;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ImageType/)
	 */
	export namespace ImageType {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ImageType#Asset)
		 */
		export interface Asset extends globalThis.EnumItem {}
		export const Asset: Asset;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ImageType#AssetThumbnail)
		 */
		export interface AssetThumbnail extends globalThis.EnumItem {}
		export const AssetThumbnail: AssetThumbnail;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ImageType#PlaceThumbnail)
		 */
		export interface PlaceThumbnail extends globalThis.EnumItem {}
		export const PlaceThumbnail: PlaceThumbnail;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ImageType#UserAvatar)
		 */
		export interface UserAvatar extends globalThis.EnumItem {}
		export const UserAvatar: UserAvatar;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ImageType#UserAvatarHeadshot)
		 */
		export interface UserAvatarHeadshot extends globalThis.EnumItem {}
		export const UserAvatarHeadshot: UserAvatarHeadshot;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ImageType#GuildIcon)
		 */
		export interface GuildIcon extends globalThis.EnumItem {}
		export const GuildIcon: GuildIcon;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ImageType#GuildBanner)
		 */
		export interface GuildBanner extends globalThis.EnumItem {}
		export const GuildBanner: GuildBanner;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ImageType#PlaceIcon)
		 */
		export interface PlaceIcon extends globalThis.EnumItem {}
		export const PlaceIcon: PlaceIcon;
	}
	export type ImageType =
		| ImageType.Asset
		| ImageType.AssetThumbnail
		| ImageType.PlaceThumbnail
		| ImageType.UserAvatar
		| ImageType.UserAvatarHeadshot
		| ImageType.GuildIcon
		| ImageType.GuildBanner
		| ImageType.PlaceIcon;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode/)
	 */
	export namespace KeyCode {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#None)
		 */
		export interface None extends globalThis.EnumItem {}
		export const None: None;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Space)
		 */
		export interface Space extends globalThis.EnumItem {}
		export const Space: Space;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Exclam)
		 */
		export interface Exclam extends globalThis.EnumItem {}
		export const Exclam: Exclam;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#QuotedBl)
		 */
		export interface QuotedBl extends globalThis.EnumItem {}
		export const QuotedBl: QuotedBl;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Numbersign)
		 */
		export interface Numbersign extends globalThis.EnumItem {}
		export const Numbersign: Numbersign;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Dollar)
		 */
		export interface Dollar extends globalThis.EnumItem {}
		export const Dollar: Dollar;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Percent)
		 */
		export interface Percent extends globalThis.EnumItem {}
		export const Percent: Percent;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Ampersand)
		 */
		export interface Ampersand extends globalThis.EnumItem {}
		export const Ampersand: Ampersand;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Apostrophe)
		 */
		export interface Apostrophe extends globalThis.EnumItem {}
		export const Apostrophe: Apostrophe;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#ParenLeft)
		 */
		export interface ParenLeft extends globalThis.EnumItem {}
		export const ParenLeft: ParenLeft;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Parenright)
		 */
		export interface Parenright extends globalThis.EnumItem {}
		export const Parenright: Parenright;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Asterisk)
		 */
		export interface Asterisk extends globalThis.EnumItem {}
		export const Asterisk: Asterisk;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Plus)
		 */
		export interface Plus extends globalThis.EnumItem {}
		export const Plus: Plus;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Comma)
		 */
		export interface Comma extends globalThis.EnumItem {}
		export const Comma: Comma;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Minus)
		 */
		export interface Minus extends globalThis.EnumItem {}
		export const Minus: Minus;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Period)
		 */
		export interface Period extends globalThis.EnumItem {}
		export const Period: Period;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Slash)
		 */
		export interface Slash extends globalThis.EnumItem {}
		export const Slash: Slash;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Key0)
		 */
		export interface Key0 extends globalThis.EnumItem {}
		export const Key0: Key0;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Key1)
		 */
		export interface Key1 extends globalThis.EnumItem {}
		export const Key1: Key1;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Key2)
		 */
		export interface Key2 extends globalThis.EnumItem {}
		export const Key2: Key2;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Key3)
		 */
		export interface Key3 extends globalThis.EnumItem {}
		export const Key3: Key3;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Key4)
		 */
		export interface Key4 extends globalThis.EnumItem {}
		export const Key4: Key4;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Key5)
		 */
		export interface Key5 extends globalThis.EnumItem {}
		export const Key5: Key5;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Key6)
		 */
		export interface Key6 extends globalThis.EnumItem {}
		export const Key6: Key6;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Key7)
		 */
		export interface Key7 extends globalThis.EnumItem {}
		export const Key7: Key7;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Key8)
		 */
		export interface Key8 extends globalThis.EnumItem {}
		export const Key8: Key8;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Key9)
		 */
		export interface Key9 extends globalThis.EnumItem {}
		export const Key9: Key9;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Colon)
		 */
		export interface Colon extends globalThis.EnumItem {}
		export const Colon: Colon;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Semicolon)
		 */
		export interface Semicolon extends globalThis.EnumItem {}
		export const Semicolon: Semicolon;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Less)
		 */
		export interface Less extends globalThis.EnumItem {}
		export const Less: Less;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Equal)
		 */
		export interface Equal extends globalThis.EnumItem {}
		export const Equal: Equal;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Greater)
		 */
		export interface Greater extends globalThis.EnumItem {}
		export const Greater: Greater;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Question)
		 */
		export interface Question extends globalThis.EnumItem {}
		export const Question: Question;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#At)
		 */
		export interface At extends globalThis.EnumItem {}
		export const At: At;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#A)
		 */
		export interface A extends globalThis.EnumItem {}
		export const A: A;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#B)
		 */
		export interface B extends globalThis.EnumItem {}
		export const B: B;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#C)
		 */
		export interface C extends globalThis.EnumItem {}
		export const C: C;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#D)
		 */
		export interface D extends globalThis.EnumItem {}
		export const D: D;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#E)
		 */
		export interface E extends globalThis.EnumItem {}
		export const E: E;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#F)
		 */
		export interface F extends globalThis.EnumItem {}
		export const F: F;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#G)
		 */
		export interface G extends globalThis.EnumItem {}
		export const G: G;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#H)
		 */
		export interface H extends globalThis.EnumItem {}
		export const H: H;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#I)
		 */
		export interface I extends globalThis.EnumItem {}
		export const I: I;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#J)
		 */
		export interface J extends globalThis.EnumItem {}
		export const J: J;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#K)
		 */
		export interface K extends globalThis.EnumItem {}
		export const K: K;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#L)
		 */
		export interface L extends globalThis.EnumItem {}
		export const L: L;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#M)
		 */
		export interface M extends globalThis.EnumItem {}
		export const M: M;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#N)
		 */
		export interface N extends globalThis.EnumItem {}
		export const N: N;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#O)
		 */
		export interface O extends globalThis.EnumItem {}
		export const O: O;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#P)
		 */
		export interface P extends globalThis.EnumItem {}
		export const P: P;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Q)
		 */
		export interface Q extends globalThis.EnumItem {}
		export const Q: Q;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#R)
		 */
		export interface R extends globalThis.EnumItem {}
		export const R: R;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#S)
		 */
		export interface S extends globalThis.EnumItem {}
		export const S: S;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#T)
		 */
		export interface T extends globalThis.EnumItem {}
		export const T: T;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#U)
		 */
		export interface U extends globalThis.EnumItem {}
		export const U: U;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#V)
		 */
		export interface V extends globalThis.EnumItem {}
		export const V: V;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#W)
		 */
		export interface W extends globalThis.EnumItem {}
		export const W: W;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#X)
		 */
		export interface X extends globalThis.EnumItem {}
		export const X: X;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Y)
		 */
		export interface Y extends globalThis.EnumItem {}
		export const Y: Y;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Z)
		 */
		export interface Z extends globalThis.EnumItem {}
		export const Z: Z;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#BracketLeft)
		 */
		export interface BracketLeft extends globalThis.EnumItem {}
		export const BracketLeft: BracketLeft;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Backslash)
		 */
		export interface Backslash extends globalThis.EnumItem {}
		export const Backslash: Backslash;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#BracketRight)
		 */
		export interface BracketRight extends globalThis.EnumItem {}
		export const BracketRight: BracketRight;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Asciicircum)
		 */
		export interface Asciicircum extends globalThis.EnumItem {}
		export const Asciicircum: Asciicircum;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Underscore)
		 */
		export interface Underscore extends globalThis.EnumItem {}
		export const Underscore: Underscore;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#QuoteLeft)
		 */
		export interface QuoteLeft extends globalThis.EnumItem {}
		export const QuoteLeft: QuoteLeft;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#BraceLeft)
		 */
		export interface BraceLeft extends globalThis.EnumItem {}
		export const BraceLeft: BraceLeft;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Bar)
		 */
		export interface Bar extends globalThis.EnumItem {}
		export const Bar: Bar;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#BraceRight)
		 */
		export interface BraceRight extends globalThis.EnumItem {}
		export const BraceRight: BraceRight;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Asciitilde)
		 */
		export interface Asciitilde extends globalThis.EnumItem {}
		export const Asciitilde: Asciitilde;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Yen)
		 */
		export interface Yen extends globalThis.EnumItem {}
		export const Yen: Yen;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Section)
		 */
		export interface Section extends globalThis.EnumItem {}
		export const Section: Section;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadA)
		 */
		export interface GamepadA extends globalThis.EnumItem {}
		export const GamepadA: GamepadA;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadB)
		 */
		export interface GamepadB extends globalThis.EnumItem {}
		export const GamepadB: GamepadB;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadX)
		 */
		export interface GamepadX extends globalThis.EnumItem {}
		export const GamepadX: GamepadX;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadY)
		 */
		export interface GamepadY extends globalThis.EnumItem {}
		export const GamepadY: GamepadY;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadBack)
		 */
		export interface GamepadBack extends globalThis.EnumItem {}
		export const GamepadBack: GamepadBack;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadGuide)
		 */
		export interface GamepadGuide extends globalThis.EnumItem {}
		export const GamepadGuide: GamepadGuide;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadStart)
		 */
		export interface GamepadStart extends globalThis.EnumItem {}
		export const GamepadStart: GamepadStart;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadLeftStick)
		 */
		export interface GamepadLeftStick extends globalThis.EnumItem {}
		export const GamepadLeftStick: GamepadLeftStick;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadRightStick)
		 */
		export interface GamepadRightStick extends globalThis.EnumItem {}
		export const GamepadRightStick: GamepadRightStick;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadLeftShoulder)
		 */
		export interface GamepadLeftShoulder extends globalThis.EnumItem {}
		export const GamepadLeftShoulder: GamepadLeftShoulder;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadRightShoulder)
		 */
		export interface GamepadRightShoulder extends globalThis.EnumItem {}
		export const GamepadRightShoulder: GamepadRightShoulder;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadDpadUp)
		 */
		export interface GamepadDpadUp extends globalThis.EnumItem {}
		export const GamepadDpadUp: GamepadDpadUp;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadDpadDown)
		 */
		export interface GamepadDpadDown extends globalThis.EnumItem {}
		export const GamepadDpadDown: GamepadDpadDown;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadDpadLeft)
		 */
		export interface GamepadDpadLeft extends globalThis.EnumItem {}
		export const GamepadDpadLeft: GamepadDpadLeft;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadDpadRight)
		 */
		export interface GamepadDpadRight extends globalThis.EnumItem {}
		export const GamepadDpadRight: GamepadDpadRight;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadPaddle1)
		 */
		export interface GamepadPaddle1 extends globalThis.EnumItem {}
		export const GamepadPaddle1: GamepadPaddle1;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadPaddle2)
		 */
		export interface GamepadPaddle2 extends globalThis.EnumItem {}
		export const GamepadPaddle2: GamepadPaddle2;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadPaddle3)
		 */
		export interface GamepadPaddle3 extends globalThis.EnumItem {}
		export const GamepadPaddle3: GamepadPaddle3;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadPaddle4)
		 */
		export interface GamepadPaddle4 extends globalThis.EnumItem {}
		export const GamepadPaddle4: GamepadPaddle4;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadTouchpad)
		 */
		export interface GamepadTouchpad extends globalThis.EnumItem {}
		export const GamepadTouchpad: GamepadTouchpad;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#MouseLeft)
		 */
		export interface MouseLeft extends globalThis.EnumItem {}
		export const MouseLeft: MouseLeft;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#MouseRight)
		 */
		export interface MouseRight extends globalThis.EnumItem {}
		export const MouseRight: MouseRight;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#MouseMiddle)
		 */
		export interface MouseMiddle extends globalThis.EnumItem {}
		export const MouseMiddle: MouseMiddle;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#MouseWheelUp)
		 */
		export interface MouseWheelUp extends globalThis.EnumItem {}
		export const MouseWheelUp: MouseWheelUp;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#MouseWheelDown)
		 */
		export interface MouseWheelDown extends globalThis.EnumItem {}
		export const MouseWheelDown: MouseWheelDown;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#MouseWheelLeft)
		 */
		export interface MouseWheelLeft extends globalThis.EnumItem {}
		export const MouseWheelLeft: MouseWheelLeft;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#MouseWheelRight)
		 */
		export interface MouseWheelRight extends globalThis.EnumItem {}
		export const MouseWheelRight: MouseWheelRight;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#MouseXbutton1)
		 */
		export interface MouseXbutton1 extends globalThis.EnumItem {}
		export const MouseXbutton1: MouseXbutton1;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#MouseXbutton2)
		 */
		export interface MouseXbutton2 extends globalThis.EnumItem {}
		export const MouseXbutton2: MouseXbutton2;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadAxisLeftX)
		 */
		export interface GamepadAxisLeftX extends globalThis.EnumItem {}
		export const GamepadAxisLeftX: GamepadAxisLeftX;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadAxisLeftY)
		 */
		export interface GamepadAxisLeftY extends globalThis.EnumItem {}
		export const GamepadAxisLeftY: GamepadAxisLeftY;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadAxisRightX)
		 */
		export interface GamepadAxisRightX extends globalThis.EnumItem {}
		export const GamepadAxisRightX: GamepadAxisRightX;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadAxisRightY)
		 */
		export interface GamepadAxisRightY extends globalThis.EnumItem {}
		export const GamepadAxisRightY: GamepadAxisRightY;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadAxisTriggerLeft)
		 */
		export interface GamepadAxisTriggerLeft extends globalThis.EnumItem {}
		export const GamepadAxisTriggerLeft: GamepadAxisTriggerLeft;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#GamepadAxisTriggerRight)
		 */
		export interface GamepadAxisTriggerRight extends globalThis.EnumItem {}
		export const GamepadAxisTriggerRight: GamepadAxisTriggerRight;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Special)
		 */
		export interface Special extends globalThis.EnumItem {}
		export const Special: Special;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Escape)
		 */
		export interface Escape extends globalThis.EnumItem {}
		export const Escape: Escape;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Tab)
		 */
		export interface Tab extends globalThis.EnumItem {}
		export const Tab: Tab;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Backtab)
		 */
		export interface Backtab extends globalThis.EnumItem {}
		export const Backtab: Backtab;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Backspace)
		 */
		export interface Backspace extends globalThis.EnumItem {}
		export const Backspace: Backspace;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Enter)
		 */
		export interface Enter extends globalThis.EnumItem {}
		export const Enter: Enter;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#KpEnter)
		 */
		export interface KpEnter extends globalThis.EnumItem {}
		export const KpEnter: KpEnter;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Insert)
		 */
		export interface Insert extends globalThis.EnumItem {}
		export const Insert: Insert;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Delete)
		 */
		export interface Delete extends globalThis.EnumItem {}
		export const Delete: Delete;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Left)
		 */
		export interface Left extends globalThis.EnumItem {}
		export const Left: Left;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Up)
		 */
		export interface Up extends globalThis.EnumItem {}
		export const Up: Up;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Right)
		 */
		export interface Right extends globalThis.EnumItem {}
		export const Right: Right;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Down)
		 */
		export interface Down extends globalThis.EnumItem {}
		export const Down: Down;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#PageUp)
		 */
		export interface PageUp extends globalThis.EnumItem {}
		export const PageUp: PageUp;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#PageDown)
		 */
		export interface PageDown extends globalThis.EnumItem {}
		export const PageDown: PageDown;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Shift)
		 */
		export interface Shift extends globalThis.EnumItem {}
		export const Shift: Shift;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Ctrl)
		 */
		export interface Ctrl extends globalThis.EnumItem {}
		export const Ctrl: Ctrl;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Meta)
		 */
		export interface Meta extends globalThis.EnumItem {}
		export const Meta: Meta;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Alt)
		 */
		export interface Alt extends globalThis.EnumItem {}
		export const Alt: Alt;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#CapsLock)
		 */
		export interface CapsLock extends globalThis.EnumItem {}
		export const CapsLock: CapsLock;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#NumLock)
		 */
		export interface NumLock extends globalThis.EnumItem {}
		export const NumLock: NumLock;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#ScrollLock)
		 */
		export interface ScrollLock extends globalThis.EnumItem {}
		export const ScrollLock: ScrollLock;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#F1)
		 */
		export interface F1 extends globalThis.EnumItem {}
		export const F1: F1;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#F2)
		 */
		export interface F2 extends globalThis.EnumItem {}
		export const F2: F2;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#F3)
		 */
		export interface F3 extends globalThis.EnumItem {}
		export const F3: F3;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#F4)
		 */
		export interface F4 extends globalThis.EnumItem {}
		export const F4: F4;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#F5)
		 */
		export interface F5 extends globalThis.EnumItem {}
		export const F5: F5;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#F6)
		 */
		export interface F6 extends globalThis.EnumItem {}
		export const F6: F6;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#F7)
		 */
		export interface F7 extends globalThis.EnumItem {}
		export const F7: F7;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#F8)
		 */
		export interface F8 extends globalThis.EnumItem {}
		export const F8: F8;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#F9)
		 */
		export interface F9 extends globalThis.EnumItem {}
		export const F9: F9;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#F10)
		 */
		export interface F10 extends globalThis.EnumItem {}
		export const F10: F10;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#F11)
		 */
		export interface F11 extends globalThis.EnumItem {}
		export const F11: F11;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#F12)
		 */
		export interface F12 extends globalThis.EnumItem {}
		export const F12: F12;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Menu)
		 */
		export interface Menu extends globalThis.EnumItem {}
		export const Menu: Menu;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Hyper)
		 */
		export interface Hyper extends globalThis.EnumItem {}
		export const Hyper: Hyper;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#KpMultiply)
		 */
		export interface KpMultiply extends globalThis.EnumItem {}
		export const KpMultiply: KpMultiply;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#KpDivide)
		 */
		export interface KpDivide extends globalThis.EnumItem {}
		export const KpDivide: KpDivide;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#KpSubtract)
		 */
		export interface KpSubtract extends globalThis.EnumItem {}
		export const KpSubtract: KpSubtract;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#KpPeriod)
		 */
		export interface KpPeriod extends globalThis.EnumItem {}
		export const KpPeriod: KpPeriod;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#KpAdd)
		 */
		export interface KpAdd extends globalThis.EnumItem {}
		export const KpAdd: KpAdd;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Kp0)
		 */
		export interface Kp0 extends globalThis.EnumItem {}
		export const Kp0: Kp0;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Kp1)
		 */
		export interface Kp1 extends globalThis.EnumItem {}
		export const Kp1: Kp1;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Kp2)
		 */
		export interface Kp2 extends globalThis.EnumItem {}
		export const Kp2: Kp2;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Kp3)
		 */
		export interface Kp3 extends globalThis.EnumItem {}
		export const Kp3: Kp3;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Kp4)
		 */
		export interface Kp4 extends globalThis.EnumItem {}
		export const Kp4: Kp4;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Kp5)
		 */
		export interface Kp5 extends globalThis.EnumItem {}
		export const Kp5: Kp5;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Kp6)
		 */
		export interface Kp6 extends globalThis.EnumItem {}
		export const Kp6: Kp6;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Kp7)
		 */
		export interface Kp7 extends globalThis.EnumItem {}
		export const Kp7: Kp7;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Kp8)
		 */
		export interface Kp8 extends globalThis.EnumItem {}
		export const Kp8: Kp8;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Kp9)
		 */
		export interface Kp9 extends globalThis.EnumItem {}
		export const Kp9: Kp9;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/KeyCode#Unknown)
		 */
		export interface Unknown extends globalThis.EnumItem {}
		export const Unknown: Unknown;
	}
	export type KeyCode =
		| KeyCode.None
		| KeyCode.Space
		| KeyCode.Exclam
		| KeyCode.QuotedBl
		| KeyCode.Numbersign
		| KeyCode.Dollar
		| KeyCode.Percent
		| KeyCode.Ampersand
		| KeyCode.Apostrophe
		| KeyCode.ParenLeft
		| KeyCode.Parenright
		| KeyCode.Asterisk
		| KeyCode.Plus
		| KeyCode.Comma
		| KeyCode.Minus
		| KeyCode.Period
		| KeyCode.Slash
		| KeyCode.Key0
		| KeyCode.Key1
		| KeyCode.Key2
		| KeyCode.Key3
		| KeyCode.Key4
		| KeyCode.Key5
		| KeyCode.Key6
		| KeyCode.Key7
		| KeyCode.Key8
		| KeyCode.Key9
		| KeyCode.Colon
		| KeyCode.Semicolon
		| KeyCode.Less
		| KeyCode.Equal
		| KeyCode.Greater
		| KeyCode.Question
		| KeyCode.At
		| KeyCode.A
		| KeyCode.B
		| KeyCode.C
		| KeyCode.D
		| KeyCode.E
		| KeyCode.F
		| KeyCode.G
		| KeyCode.H
		| KeyCode.I
		| KeyCode.J
		| KeyCode.K
		| KeyCode.L
		| KeyCode.M
		| KeyCode.N
		| KeyCode.O
		| KeyCode.P
		| KeyCode.Q
		| KeyCode.R
		| KeyCode.S
		| KeyCode.T
		| KeyCode.U
		| KeyCode.V
		| KeyCode.W
		| KeyCode.X
		| KeyCode.Y
		| KeyCode.Z
		| KeyCode.BracketLeft
		| KeyCode.Backslash
		| KeyCode.BracketRight
		| KeyCode.Asciicircum
		| KeyCode.Underscore
		| KeyCode.QuoteLeft
		| KeyCode.BraceLeft
		| KeyCode.Bar
		| KeyCode.BraceRight
		| KeyCode.Asciitilde
		| KeyCode.Yen
		| KeyCode.Section
		| KeyCode.GamepadA
		| KeyCode.GamepadB
		| KeyCode.GamepadX
		| KeyCode.GamepadY
		| KeyCode.GamepadBack
		| KeyCode.GamepadGuide
		| KeyCode.GamepadStart
		| KeyCode.GamepadLeftStick
		| KeyCode.GamepadRightStick
		| KeyCode.GamepadLeftShoulder
		| KeyCode.GamepadRightShoulder
		| KeyCode.GamepadDpadUp
		| KeyCode.GamepadDpadDown
		| KeyCode.GamepadDpadLeft
		| KeyCode.GamepadDpadRight
		| KeyCode.GamepadPaddle1
		| KeyCode.GamepadPaddle2
		| KeyCode.GamepadPaddle3
		| KeyCode.GamepadPaddle4
		| KeyCode.GamepadTouchpad
		| KeyCode.MouseLeft
		| KeyCode.MouseRight
		| KeyCode.MouseMiddle
		| KeyCode.MouseWheelUp
		| KeyCode.MouseWheelDown
		| KeyCode.MouseWheelLeft
		| KeyCode.MouseWheelRight
		| KeyCode.MouseXbutton1
		| KeyCode.MouseXbutton2
		| KeyCode.GamepadAxisLeftX
		| KeyCode.GamepadAxisLeftY
		| KeyCode.GamepadAxisRightX
		| KeyCode.GamepadAxisRightY
		| KeyCode.GamepadAxisTriggerLeft
		| KeyCode.GamepadAxisTriggerRight
		| KeyCode.Special
		| KeyCode.Escape
		| KeyCode.Tab
		| KeyCode.Backtab
		| KeyCode.Backspace
		| KeyCode.Enter
		| KeyCode.KpEnter
		| KeyCode.Insert
		| KeyCode.Delete
		| KeyCode.Left
		| KeyCode.Up
		| KeyCode.Right
		| KeyCode.Down
		| KeyCode.PageUp
		| KeyCode.PageDown
		| KeyCode.Shift
		| KeyCode.Ctrl
		| KeyCode.Meta
		| KeyCode.Alt
		| KeyCode.CapsLock
		| KeyCode.NumLock
		| KeyCode.ScrollLock
		| KeyCode.F1
		| KeyCode.F2
		| KeyCode.F3
		| KeyCode.F4
		| KeyCode.F5
		| KeyCode.F6
		| KeyCode.F7
		| KeyCode.F8
		| KeyCode.F9
		| KeyCode.F10
		| KeyCode.F11
		| KeyCode.F12
		| KeyCode.Menu
		| KeyCode.Hyper
		| KeyCode.KpMultiply
		| KeyCode.KpDivide
		| KeyCode.KpSubtract
		| KeyCode.KpPeriod
		| KeyCode.KpAdd
		| KeyCode.Kp0
		| KeyCode.Kp1
		| KeyCode.Kp2
		| KeyCode.Kp3
		| KeyCode.Kp4
		| KeyCode.Kp5
		| KeyCode.Kp6
		| KeyCode.Kp7
		| KeyCode.Kp8
		| KeyCode.Kp9
		| KeyCode.Unknown;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/MeshCollisionType/)
	 */
	export namespace MeshCollisionType {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/MeshCollisionType#Bounds)
		 */
		export interface Bounds extends globalThis.EnumItem {}
		export const Bounds: Bounds;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/MeshCollisionType#Convex)
		 */
		export interface Convex extends globalThis.EnumItem {}
		export const Convex: Convex;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/MeshCollisionType#Exact)
		 */
		export interface Exact extends globalThis.EnumItem {}
		export const Exact: Exact;
	}
	export type MeshCollisionType = MeshCollisionType.Bounds | MeshCollisionType.Convex | MeshCollisionType.Exact;
	export namespace CollisionType {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CollisionType#Bounds)
		 */
		export interface Bounds extends globalThis.EnumItem {}
		export const Bounds: Bounds;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CollisionType#Convex)
		 */
		export interface Convex extends globalThis.EnumItem {}
		export const Convex: Convex;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/CollisionType#Exact)
		 */
		export interface Exact extends globalThis.EnumItem {}
		export const Exact: Exact;
	}
	export type CollisionType = CollisionType.Bounds | CollisionType.Convex | CollisionType.Exact;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ParticleEmissionShape/)
	 */
	export namespace ParticleEmissionShape {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ParticleEmissionShape#Point)
		 */
		export interface Point extends globalThis.EnumItem {}
		export const Point: Point;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ParticleEmissionShape#Sphere)
		 */
		export interface Sphere extends globalThis.EnumItem {}
		export const Sphere: Sphere;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ParticleEmissionShape#SphereSurface)
		 */
		export interface SphereSurface extends globalThis.EnumItem {}
		export const SphereSurface: SphereSurface;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ParticleEmissionShape#Box)
		 */
		export interface Box extends globalThis.EnumItem {}
		export const Box: Box;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ParticleEmissionShape#Ring)
		 */
		export interface Ring extends globalThis.EnumItem {}
		export const Ring: Ring;
	}
	export type ParticleEmissionShape =
		| ParticleEmissionShape.Point
		| ParticleEmissionShape.Sphere
		| ParticleEmissionShape.SphereSurface
		| ParticleEmissionShape.Box
		| ParticleEmissionShape.Ring;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ParticleSimulationSpace/)
	 */
	export namespace ParticleSimulationSpace {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ParticleSimulationSpace#Local)
		 */
		export interface Local extends globalThis.EnumItem {}
		export const Local: Local;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ParticleSimulationSpace#World)
		 */
		export interface World extends globalThis.EnumItem {}
		export const World: World;
	}
	export type ParticleSimulationSpace = ParticleSimulationSpace.Local | ParticleSimulationSpace.World;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial/)
	 */
	export namespace PartMaterial {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#SmoothPlastic)
		 */
		export interface SmoothPlastic extends globalThis.EnumItem {}
		export const SmoothPlastic: SmoothPlastic;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Brick)
		 */
		export interface Brick extends globalThis.EnumItem {}
		export const Brick: Brick;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Concrete)
		 */
		export interface Concrete extends globalThis.EnumItem {}
		export const Concrete: Concrete;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Dirt)
		 */
		export interface Dirt extends globalThis.EnumItem {}
		export const Dirt: Dirt;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Fabric)
		 */
		export interface Fabric extends globalThis.EnumItem {}
		export const Fabric: Fabric;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Grass)
		 */
		export interface Grass extends globalThis.EnumItem {}
		export const Grass: Grass;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Ice)
		 */
		export interface Ice extends globalThis.EnumItem {}
		export const Ice: Ice;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Marble)
		 */
		export interface Marble extends globalThis.EnumItem {}
		export const Marble: Marble;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Metal)
		 */
		export interface Metal extends globalThis.EnumItem {}
		export const Metal: Metal;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#MetalGrid)
		 */
		export interface MetalGrid extends globalThis.EnumItem {}
		export const MetalGrid: MetalGrid;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#MetalPlate)
		 */
		export interface MetalPlate extends globalThis.EnumItem {}
		export const MetalPlate: MetalPlate;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Neon)
		 */
		export interface Neon extends globalThis.EnumItem {}
		export const Neon: Neon;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Planks)
		 */
		export interface Planks extends globalThis.EnumItem {}
		export const Planks: Planks;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Plastic)
		 */
		export interface Plastic extends globalThis.EnumItem {}
		export const Plastic: Plastic;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Plywood)
		 */
		export interface Plywood extends globalThis.EnumItem {}
		export const Plywood: Plywood;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#RustyIron)
		 */
		export interface RustyIron extends globalThis.EnumItem {}
		export const RustyIron: RustyIron;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Sand)
		 */
		export interface Sand extends globalThis.EnumItem {}
		export const Sand: Sand;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Sandstone)
		 */
		export interface Sandstone extends globalThis.EnumItem {}
		export const Sandstone: Sandstone;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Snow)
		 */
		export interface Snow extends globalThis.EnumItem {}
		export const Snow: Snow;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Stone)
		 */
		export interface Stone extends globalThis.EnumItem {}
		export const Stone: Stone;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartMaterial#Wood)
		 */
		export interface Wood extends globalThis.EnumItem {}
		export const Wood: Wood;
	}
	export type PartMaterial =
		| PartMaterial.SmoothPlastic
		| PartMaterial.Brick
		| PartMaterial.Concrete
		| PartMaterial.Dirt
		| PartMaterial.Fabric
		| PartMaterial.Grass
		| PartMaterial.Ice
		| PartMaterial.Marble
		| PartMaterial.Metal
		| PartMaterial.MetalGrid
		| PartMaterial.MetalPlate
		| PartMaterial.Neon
		| PartMaterial.Planks
		| PartMaterial.Plastic
		| PartMaterial.Plywood
		| PartMaterial.RustyIron
		| PartMaterial.Sand
		| PartMaterial.Sandstone
		| PartMaterial.Snow
		| PartMaterial.Stone
		| PartMaterial.Wood;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartShape/)
	 */
	export namespace PartShape {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartShape#Brick)
		 */
		export interface Brick extends globalThis.EnumItem {}
		export const Brick: Brick;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartShape#Sphere)
		 */
		export interface Sphere extends globalThis.EnumItem {}
		export const Sphere: Sphere;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartShape#Cylinder)
		 */
		export interface Cylinder extends globalThis.EnumItem {}
		export const Cylinder: Cylinder;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartShape#Cone)
		 */
		export interface Cone extends globalThis.EnumItem {}
		export const Cone: Cone;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartShape#Wedge)
		 */
		export interface Wedge extends globalThis.EnumItem {}
		export const Wedge: Wedge;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartShape#Corner)
		 */
		export interface Corner extends globalThis.EnumItem {}
		export const Corner: Corner;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartShape#Bevel)
		 */
		export interface Bevel extends globalThis.EnumItem {}
		export const Bevel: Bevel;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartShape#Concave)
		 */
		export interface Concave extends globalThis.EnumItem {}
		export const Concave: Concave;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartShape#Truss)
		 */
		export interface Truss extends globalThis.EnumItem {}
		export const Truss: Truss;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/PartShape#Frame)
		 */
		export interface Frame extends globalThis.EnumItem {}
		export const Frame: Frame;
	}
	export type PartShape =
		| PartShape.Brick
		| PartShape.Sphere
		| PartShape.Cylinder
		| PartShape.Cone
		| PartShape.Wedge
		| PartShape.Corner
		| PartShape.Bevel
		| PartShape.Concave
		| PartShape.Truss
		| PartShape.Frame;
	export namespace Shape {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Shape#Brick)
		 */
		export interface Brick extends globalThis.EnumItem {}
		export const Brick: Brick;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Shape#Sphere)
		 */
		export interface Sphere extends globalThis.EnumItem {}
		export const Sphere: Sphere;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Shape#Cylinder)
		 */
		export interface Cylinder extends globalThis.EnumItem {}
		export const Cylinder: Cylinder;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Shape#Cone)
		 */
		export interface Cone extends globalThis.EnumItem {}
		export const Cone: Cone;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Shape#Wedge)
		 */
		export interface Wedge extends globalThis.EnumItem {}
		export const Wedge: Wedge;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Shape#Corner)
		 */
		export interface Corner extends globalThis.EnumItem {}
		export const Corner: Corner;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Shape#Bevel)
		 */
		export interface Bevel extends globalThis.EnumItem {}
		export const Bevel: Bevel;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Shape#Concave)
		 */
		export interface Concave extends globalThis.EnumItem {}
		export const Concave: Concave;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Shape#Truss)
		 */
		export interface Truss extends globalThis.EnumItem {}
		export const Truss: Truss;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Shape#Frame)
		 */
		export interface Frame extends globalThis.EnumItem {}
		export const Frame: Frame;
	}
	export type Shape =
		| Shape.Brick
		| Shape.Sphere
		| Shape.Cylinder
		| Shape.Cone
		| Shape.Wedge
		| Shape.Corner
		| Shape.Bevel
		| Shape.Concave
		| Shape.Truss
		| Shape.Frame;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset/)
	 */
	export namespace SkyboxPreset {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Day1)
		 */
		export interface Day1 extends globalThis.EnumItem {}
		export const Day1: Day1;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Day2)
		 */
		export interface Day2 extends globalThis.EnumItem {}
		export const Day2: Day2;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Day3)
		 */
		export interface Day3 extends globalThis.EnumItem {}
		export const Day3: Day3;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Day4)
		 */
		export interface Day4 extends globalThis.EnumItem {}
		export const Day4: Day4;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Day5)
		 */
		export interface Day5 extends globalThis.EnumItem {}
		export const Day5: Day5;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Day6)
		 */
		export interface Day6 extends globalThis.EnumItem {}
		export const Day6: Day6;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Day7)
		 */
		export interface Day7 extends globalThis.EnumItem {}
		export const Day7: Day7;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Morning1)
		 */
		export interface Morning1 extends globalThis.EnumItem {}
		export const Morning1: Morning1;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Morning2)
		 */
		export interface Morning2 extends globalThis.EnumItem {}
		export const Morning2: Morning2;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Morning3)
		 */
		export interface Morning3 extends globalThis.EnumItem {}
		export const Morning3: Morning3;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Morning4)
		 */
		export interface Morning4 extends globalThis.EnumItem {}
		export const Morning4: Morning4;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Night1)
		 */
		export interface Night1 extends globalThis.EnumItem {}
		export const Night1: Night1;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Night2)
		 */
		export interface Night2 extends globalThis.EnumItem {}
		export const Night2: Night2;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Night3)
		 */
		export interface Night3 extends globalThis.EnumItem {}
		export const Night3: Night3;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Night4)
		 */
		export interface Night4 extends globalThis.EnumItem {}
		export const Night4: Night4;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Night5)
		 */
		export interface Night5 extends globalThis.EnumItem {}
		export const Night5: Night5;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Sunset1)
		 */
		export interface Sunset1 extends globalThis.EnumItem {}
		export const Sunset1: Sunset1;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Sunset2)
		 */
		export interface Sunset2 extends globalThis.EnumItem {}
		export const Sunset2: Sunset2;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Sunset3)
		 */
		export interface Sunset3 extends globalThis.EnumItem {}
		export const Sunset3: Sunset3;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Sunset4)
		 */
		export interface Sunset4 extends globalThis.EnumItem {}
		export const Sunset4: Sunset4;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/SkyboxPreset#Sunset5)
		 */
		export interface Sunset5 extends globalThis.EnumItem {}
		export const Sunset5: Sunset5;
	}
	export type SkyboxPreset =
		| SkyboxPreset.Day1
		| SkyboxPreset.Day2
		| SkyboxPreset.Day3
		| SkyboxPreset.Day4
		| SkyboxPreset.Day5
		| SkyboxPreset.Day6
		| SkyboxPreset.Day7
		| SkyboxPreset.Morning1
		| SkyboxPreset.Morning2
		| SkyboxPreset.Morning3
		| SkyboxPreset.Morning4
		| SkyboxPreset.Night1
		| SkyboxPreset.Night2
		| SkyboxPreset.Night3
		| SkyboxPreset.Night4
		| SkyboxPreset.Night5
		| SkyboxPreset.Sunset1
		| SkyboxPreset.Sunset2
		| SkyboxPreset.Sunset3
		| SkyboxPreset.Sunset4
		| SkyboxPreset.Sunset5;
	export namespace Skybox {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Day1)
		 */
		export interface Day1 extends globalThis.EnumItem {}
		export const Day1: Day1;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Day2)
		 */
		export interface Day2 extends globalThis.EnumItem {}
		export const Day2: Day2;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Day3)
		 */
		export interface Day3 extends globalThis.EnumItem {}
		export const Day3: Day3;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Day4)
		 */
		export interface Day4 extends globalThis.EnumItem {}
		export const Day4: Day4;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Day5)
		 */
		export interface Day5 extends globalThis.EnumItem {}
		export const Day5: Day5;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Day6)
		 */
		export interface Day6 extends globalThis.EnumItem {}
		export const Day6: Day6;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Day7)
		 */
		export interface Day7 extends globalThis.EnumItem {}
		export const Day7: Day7;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Morning1)
		 */
		export interface Morning1 extends globalThis.EnumItem {}
		export const Morning1: Morning1;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Morning2)
		 */
		export interface Morning2 extends globalThis.EnumItem {}
		export const Morning2: Morning2;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Morning3)
		 */
		export interface Morning3 extends globalThis.EnumItem {}
		export const Morning3: Morning3;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Morning4)
		 */
		export interface Morning4 extends globalThis.EnumItem {}
		export const Morning4: Morning4;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Night1)
		 */
		export interface Night1 extends globalThis.EnumItem {}
		export const Night1: Night1;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Night2)
		 */
		export interface Night2 extends globalThis.EnumItem {}
		export const Night2: Night2;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Night3)
		 */
		export interface Night3 extends globalThis.EnumItem {}
		export const Night3: Night3;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Night4)
		 */
		export interface Night4 extends globalThis.EnumItem {}
		export const Night4: Night4;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Night5)
		 */
		export interface Night5 extends globalThis.EnumItem {}
		export const Night5: Night5;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Sunset1)
		 */
		export interface Sunset1 extends globalThis.EnumItem {}
		export const Sunset1: Sunset1;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Sunset2)
		 */
		export interface Sunset2 extends globalThis.EnumItem {}
		export const Sunset2: Sunset2;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Sunset3)
		 */
		export interface Sunset3 extends globalThis.EnumItem {}
		export const Sunset3: Sunset3;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Sunset4)
		 */
		export interface Sunset4 extends globalThis.EnumItem {}
		export const Sunset4: Sunset4;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/Skybox#Sunset5)
		 */
		export interface Sunset5 extends globalThis.EnumItem {}
		export const Sunset5: Sunset5;
	}
	export type Skybox =
		| Skybox.Day1
		| Skybox.Day2
		| Skybox.Day3
		| Skybox.Day4
		| Skybox.Day5
		| Skybox.Day6
		| Skybox.Day7
		| Skybox.Morning1
		| Skybox.Morning2
		| Skybox.Morning3
		| Skybox.Morning4
		| Skybox.Night1
		| Skybox.Night2
		| Skybox.Night3
		| Skybox.Night4
		| Skybox.Night5
		| Skybox.Sunset1
		| Skybox.Sunset2
		| Skybox.Sunset3
		| Skybox.Sunset4
		| Skybox.Sunset5;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset/)
	 */
	export namespace TextFontPreset {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset#SourceSans)
		 */
		export interface SourceSans extends globalThis.EnumItem {}
		export const SourceSans: SourceSans;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset#PressStart2P)
		 */
		export interface PressStart2P extends globalThis.EnumItem {}
		export const PressStart2P: PressStart2P;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset#Montserrat)
		 */
		export interface Montserrat extends globalThis.EnumItem {}
		export const Montserrat: Montserrat;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset#RobotoMono)
		 */
		export interface RobotoMono extends globalThis.EnumItem {}
		export const RobotoMono: RobotoMono;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset#Rubik)
		 */
		export interface Rubik extends globalThis.EnumItem {}
		export const Rubik: Rubik;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset#Poppins)
		 */
		export interface Poppins extends globalThis.EnumItem {}
		export const Poppins: Poppins;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset#Domine)
		 */
		export interface Domine extends globalThis.EnumItem {}
		export const Domine: Domine;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset#Fredoka)
		 */
		export interface Fredoka extends globalThis.EnumItem {}
		export const Fredoka: Fredoka;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset#ComicNeue)
		 */
		export interface ComicNeue extends globalThis.EnumItem {}
		export const ComicNeue: ComicNeue;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset#Orbitron)
		 */
		export interface Orbitron extends globalThis.EnumItem {}
		export const Orbitron: Orbitron;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset#Papyrus)
		 */
		export interface Papyrus extends globalThis.EnumItem {}
		export const Papyrus: Papyrus;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset#ComicSansMS)
		 */
		export interface ComicSansMS extends globalThis.EnumItem {}
		export const ComicSansMS: ComicSansMS;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextFontPreset#JetBrainsMono)
		 */
		export interface JetBrainsMono extends globalThis.EnumItem {}
		export const JetBrainsMono: JetBrainsMono;
	}
	export type TextFontPreset =
		| TextFontPreset.SourceSans
		| TextFontPreset.PressStart2P
		| TextFontPreset.Montserrat
		| TextFontPreset.RobotoMono
		| TextFontPreset.Rubik
		| TextFontPreset.Poppins
		| TextFontPreset.Domine
		| TextFontPreset.Fredoka
		| TextFontPreset.ComicNeue
		| TextFontPreset.Orbitron
		| TextFontPreset.Papyrus
		| TextFontPreset.ComicSansMS
		| TextFontPreset.JetBrainsMono;
	export namespace BuiltInTextFontPreset {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInTextFontPreset#SourceSans)
		 */
		export interface SourceSans extends globalThis.EnumItem {}
		export const SourceSans: SourceSans;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInTextFontPreset#PressStart2P)
		 */
		export interface PressStart2P extends globalThis.EnumItem {}
		export const PressStart2P: PressStart2P;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInTextFontPreset#Montserrat)
		 */
		export interface Montserrat extends globalThis.EnumItem {}
		export const Montserrat: Montserrat;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInTextFontPreset#RobotoMono)
		 */
		export interface RobotoMono extends globalThis.EnumItem {}
		export const RobotoMono: RobotoMono;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInTextFontPreset#Rubik)
		 */
		export interface Rubik extends globalThis.EnumItem {}
		export const Rubik: Rubik;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInTextFontPreset#Poppins)
		 */
		export interface Poppins extends globalThis.EnumItem {}
		export const Poppins: Poppins;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInTextFontPreset#Domine)
		 */
		export interface Domine extends globalThis.EnumItem {}
		export const Domine: Domine;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInTextFontPreset#Fredoka)
		 */
		export interface Fredoka extends globalThis.EnumItem {}
		export const Fredoka: Fredoka;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInTextFontPreset#ComicNeue)
		 */
		export interface ComicNeue extends globalThis.EnumItem {}
		export const ComicNeue: ComicNeue;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInTextFontPreset#Orbitron)
		 */
		export interface Orbitron extends globalThis.EnumItem {}
		export const Orbitron: Orbitron;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInTextFontPreset#Papyrus)
		 */
		export interface Papyrus extends globalThis.EnumItem {}
		export const Papyrus: Papyrus;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInTextFontPreset#ComicSansMS)
		 */
		export interface ComicSansMS extends globalThis.EnumItem {}
		export const ComicSansMS: ComicSansMS;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/BuiltInTextFontPreset#JetBrainsMono)
		 */
		export interface JetBrainsMono extends globalThis.EnumItem {}
		export const JetBrainsMono: JetBrainsMono;
	}
	export type BuiltInTextFontPreset =
		| BuiltInTextFontPreset.SourceSans
		| BuiltInTextFontPreset.PressStart2P
		| BuiltInTextFontPreset.Montserrat
		| BuiltInTextFontPreset.RobotoMono
		| BuiltInTextFontPreset.Rubik
		| BuiltInTextFontPreset.Poppins
		| BuiltInTextFontPreset.Domine
		| BuiltInTextFontPreset.Fredoka
		| BuiltInTextFontPreset.ComicNeue
		| BuiltInTextFontPreset.Orbitron
		| BuiltInTextFontPreset.Papyrus
		| BuiltInTextFontPreset.ComicSansMS
		| BuiltInTextFontPreset.JetBrainsMono;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenDirection/)
	 */
	export namespace TweenDirection {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenDirection#In)
		 */
		export interface In extends globalThis.EnumItem {}
		export const In: In;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenDirection#Out)
		 */
		export interface Out extends globalThis.EnumItem {}
		export const Out: Out;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenDirection#InOut)
		 */
		export interface InOut extends globalThis.EnumItem {}
		export const InOut: InOut;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenDirection#OutIn)
		 */
		export interface OutIn extends globalThis.EnumItem {}
		export const OutIn: OutIn;
	}
	export type TweenDirection = TweenDirection.In | TweenDirection.Out | TweenDirection.InOut | TweenDirection.OutIn;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenTransition/)
	 */
	export namespace TweenTransition {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenTransition#Linear)
		 */
		export interface Linear extends globalThis.EnumItem {}
		export const Linear: Linear;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenTransition#Sine)
		 */
		export interface Sine extends globalThis.EnumItem {}
		export const Sine: Sine;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenTransition#Quint)
		 */
		export interface Quint extends globalThis.EnumItem {}
		export const Quint: Quint;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenTransition#Quart)
		 */
		export interface Quart extends globalThis.EnumItem {}
		export const Quart: Quart;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenTransition#Quad)
		 */
		export interface Quad extends globalThis.EnumItem {}
		export const Quad: Quad;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenTransition#Expo)
		 */
		export interface Expo extends globalThis.EnumItem {}
		export const Expo: Expo;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenTransition#Elastic)
		 */
		export interface Elastic extends globalThis.EnumItem {}
		export const Elastic: Elastic;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenTransition#Cubic)
		 */
		export interface Cubic extends globalThis.EnumItem {}
		export const Cubic: Cubic;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenTransition#Circ)
		 */
		export interface Circ extends globalThis.EnumItem {}
		export const Circ: Circ;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenTransition#Bounce)
		 */
		export interface Bounce extends globalThis.EnumItem {}
		export const Bounce: Bounce;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenTransition#Back)
		 */
		export interface Back extends globalThis.EnumItem {}
		export const Back: Back;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TweenTransition#Spring)
		 */
		export interface Spring extends globalThis.EnumItem {}
		export const Spring: Spring;
	}
	export type TweenTransition =
		| TweenTransition.Linear
		| TweenTransition.Sine
		| TweenTransition.Quint
		| TweenTransition.Quart
		| TweenTransition.Quad
		| TweenTransition.Expo
		| TweenTransition.Elastic
		| TweenTransition.Cubic
		| TweenTransition.Circ
		| TweenTransition.Bounce
		| TweenTransition.Back
		| TweenTransition.Spring;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/UILayoutAlignment/)
	 */
	export namespace UILayoutAlignment {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/UILayoutAlignment#Start)
		 */
		export interface Start extends globalThis.EnumItem {}
		export const Start: Start;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/UILayoutAlignment#Center)
		 */
		export interface Center extends globalThis.EnumItem {}
		export const Center: Center;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/UILayoutAlignment#End)
		 */
		export interface End extends globalThis.EnumItem {}
		export const End: End;
	}
	export type UILayoutAlignment = UILayoutAlignment.Start | UILayoutAlignment.Center | UILayoutAlignment.End;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/UIMaskMode/)
	 */
	export namespace UIMaskMode {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/UIMaskMode#Disabled)
		 */
		export interface Disabled extends globalThis.EnumItem {}
		export const Disabled: Disabled;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/UIMaskMode#ClipOnly)
		 */
		export interface ClipOnly extends globalThis.EnumItem {}
		export const ClipOnly: ClipOnly;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/UIMaskMode#ClipAndDraw)
		 */
		export interface ClipAndDraw extends globalThis.EnumItem {}
		export const ClipAndDraw: ClipAndDraw;
	}
	export type UIMaskMode = UIMaskMode.Disabled | UIMaskMode.ClipOnly | UIMaskMode.ClipAndDraw;
	export namespace MaskMode {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/MaskMode#Disabled)
		 */
		export interface Disabled extends globalThis.EnumItem {}
		export const Disabled: Disabled;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/MaskMode#ClipOnly)
		 */
		export interface ClipOnly extends globalThis.EnumItem {}
		export const ClipOnly: ClipOnly;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/MaskMode#ClipAndDraw)
		 */
		export interface ClipAndDraw extends globalThis.EnumItem {}
		export const ClipAndDraw: ClipAndDraw;
	}
	export type MaskMode = MaskMode.Disabled | MaskMode.ClipOnly | MaskMode.ClipAndDraw;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/UIScrollMode/)
	 */
	export namespace UIScrollMode {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/UIScrollMode#Disabled)
		 */
		export interface Disabled extends globalThis.EnumItem {}
		export const Disabled: Disabled;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/UIScrollMode#Auto)
		 */
		export interface Auto extends globalThis.EnumItem {}
		export const Auto: Auto;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/UIScrollMode#AlwaysShow)
		 */
		export interface AlwaysShow extends globalThis.EnumItem {}
		export const AlwaysShow: AlwaysShow;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/UIScrollMode#NeverShow)
		 */
		export interface NeverShow extends globalThis.EnumItem {}
		export const NeverShow: NeverShow;
	}
	export type UIScrollMode =
		| UIScrollMode.Disabled
		| UIScrollMode.Auto
		| UIScrollMode.AlwaysShow
		| UIScrollMode.NeverShow;
	export namespace ScrollMode {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ScrollMode#Disabled)
		 */
		export interface Disabled extends globalThis.EnumItem {}
		export const Disabled: Disabled;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ScrollMode#Auto)
		 */
		export interface Auto extends globalThis.EnumItem {}
		export const Auto: Auto;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ScrollMode#AlwaysShow)
		 */
		export interface AlwaysShow extends globalThis.EnumItem {}
		export const AlwaysShow: AlwaysShow;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/ScrollMode#NeverShow)
		 */
		export interface NeverShow extends globalThis.EnumItem {}
		export const NeverShow: NeverShow;
	}
	export type ScrollMode = ScrollMode.Disabled | ScrollMode.Auto | ScrollMode.AlwaysShow | ScrollMode.NeverShow;
	/**
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/VerticalAlignment/)
	 */
	export namespace VerticalAlignment {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/VerticalAlignment#Top)
		 */
		export interface Top extends globalThis.EnumItem {}
		export const Top: Top;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/VerticalAlignment#Middle)
		 */
		export interface Middle extends globalThis.EnumItem {}
		export const Middle: Middle;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/VerticalAlignment#Bottom)
		 */
		export interface Bottom extends globalThis.EnumItem {}
		export const Bottom: Bottom;
	}
	export type VerticalAlignment = VerticalAlignment.Top | VerticalAlignment.Middle | VerticalAlignment.Bottom;
	export namespace TextVerticalAlignment {
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextVerticalAlignment#Top)
		 */
		export interface Top extends globalThis.EnumItem {}
		export const Top: Top;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextVerticalAlignment#Middle)
		 */
		export interface Middle extends globalThis.EnumItem {}
		export const Middle: Middle;
		/**
		 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/enums/TextVerticalAlignment#Bottom)
		 */
		export interface Bottom extends globalThis.EnumItem {}
		export const Bottom: Bottom;
	}
	export type TextVerticalAlignment =
		| TextVerticalAlignment.Top
		| TextVerticalAlignment.Middle
		| TextVerticalAlignment.Bottom;
}

interface Accessory extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Accessory: unique symbol;
	/**
	 * Specifies the character attachment point
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Accessory#TargetAttachment)
	 */
	TargetAttachment: Enums["CharacterAttachment"];
}

interface AchievementsService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_AchievementsService: unique symbol;
	/**
	 * Fires when the local player got an achievement
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AchievementsService#GotAchievement)
	 */
	readonly GotAchievement: Event<(achievementID: number) => void>;
	/**
	 * Determine if achievement sound effect should play when user receives an achievement
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AchievementsService#UseAchievementSound)
	 */
	UseAchievementSound: boolean;
	/**
	 * Determine if achievement toast should show when user receives an achievement
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AchievementsService#NotifyAchievements)
	 */
	NotifyAchievements: boolean;
	/**
	 * Award achievement to the user asynchronously.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AchievementsService#AwardAsync)
	 */
	AwardAsync(this: AchievementsService, userID: number, achievementID: number): void;
	/**
	 * Check if player of ID has the achievement, asynchronously.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AchievementsService#HasAchievementAsync)
	 */
	HasAchievementAsync(this: AchievementsService, userID: number, achievementID: number): boolean;
}

interface AddonObject {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_AddonObject: unique symbol;
	/**
	 * Fires when cleanup has been requested by the creator, this is usually fires when updating the addon.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AddonObject#CleanupReceived)
	 */
	readonly CleanupReceived: Event<() => void>;
	/**
	 * The identifier for this addon.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AddonObject#Identifier)
	 */
	readonly Identifier: string;
	/**
	 * The display name of the addon. This name will appear in the tools menu.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AddonObject#AddonName)
	 */
	AddonName: string;
	/**
	 * Determines the addon icon.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AddonObject#AddonIcon)
	 */
	AddonIcon: PTImageAsset;
	/**
	 * Prompt the user to request for permissions
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AddonObject#RequestPermissions)
	 */
	RequestPermissions(this: AddonObject, perms: Array<Enums["AddonPermission"]>): void;
	/**
	 * Create a new tool item with text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AddonObject#CreateToolItem)
	 */
	CreateToolItem(this: AddonObject, txt: string): AddonToolItem;
}

interface AddonToolItem {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_AddonToolItem: unique symbol;
	/**
	 * Fires when this tool item has been pressed
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AddonToolItem#Pressed)
	 */
	readonly Pressed: Event<() => void>;
}

interface Animation extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Animation: unique symbol;
}

interface Animator extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Animator: unique symbol;
	/**
	 * Play animation
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Animator#PlayAnimation)
	 */
	PlayAnimation(this: Animator, animationKey: string): void;
	/**
	 * Play oneshot animation
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Animator#PlayOneshotAnimation)
	 */
	PlayOneshotAnimation(this: Animator, animationKey: string): void;
	/**
	 * Stop current animation
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Animator#StopAnimation)
	 */
	StopAnimation(this: Animator): void;
	/**
	 * Abort current oneshot animation
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Animator#StopOneshotAnimation)
	 */
	StopOneshotAnimation(this: Animator): void;
}

interface AssetsService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_AssetsService: unique symbol;
	/**
	 * Create new asset with the class name
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AssetsService#NewAsset)
	 */
	NewAsset(this: AssetsService, assetClassName: string): BaseAsset;
	/**
	 * Create new image from Polytoria with the target ID
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AssetsService#NewPTImage)
	 */
	NewPTImage(this: AssetsService, imgID: number): PTImageAsset;
	/**
	 * Create new audio from Polytoria with the target ID
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AssetsService#NewPTAudio)
	 */
	NewPTAudio(this: AssetsService, audioID: number): PTAudioAsset;
	/**
	 * Create new mesh from Polytoria with the target ID
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AssetsService#NewPTMesh)
	 */
	NewPTMesh(this: AssetsService, assetID: number): PTMeshAsset;
	/**
	 * Retrieve `FileLinkAsset` with the specified path
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AssetsService#GetFileLinkByPath)
	 */
	GetFileLinkByPath(this: AssetsService, path: string): FileLinkAsset;
	/**
	 * Retrieve `FileLinkAsset` with the specified ID
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/AssetsService#GetFileLinkByID)
	 */
	GetFileLinkByID(this: AssetsService, id: string): FileLinkAsset;
}

interface AudioAsset extends ResourceAsset {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_AudioAsset: unique symbol;
}

interface BaseAsset extends NetworkedObject {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_BaseAsset: unique symbol;
}

interface BindableEvent extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_BindableEvent: unique symbol;
	/**
	 * Fires when this event has been invoked
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/BindableEvent#Invoked)
	 */
	readonly Invoked: Event<(...args: any) => void>;
	/**
	 * Invoke this event with parameters
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/BindableEvent#Invoke)
	 */
	Invoke(this: BindableEvent, par: any): void;
}

interface BodyPosition extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_BodyPosition: unique symbol;
	/**
	 * Determines the target position that the body applies forces to get to.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/BodyPosition#TargetPosition)
	 */
	TargetPosition: Vector3;
	/**
	 * Determines how much force the body applies.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/BodyPosition#Force)
	 */
	Force: number;
	/**
	 * Determines how close the body has to be to the target position to stop applying forces to it.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/BodyPosition#AcceptanceDistance)
	 */
	AcceptanceDistance: number;
}

interface BoolValue extends ValueBase {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_BoolValue: unique symbol;
	/**
	 * The value of this object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/BoolValue#Value)
	 */
	Value: boolean;
}

interface Bounds {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Bounds: unique symbol;
	/**
	 * Indicates the center point of the bounds.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#Center)
	 */
	readonly Center: Vector3;
	/**
	 * Determines the size of the bounds.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#Size)
	 */
	Size: Vector3;
	/**
	 * Indicates the extents of the bounds.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#Extents)
	 */
	readonly Extents: Vector3;
	/**
	 * The origin point
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#Start)
	 */
	readonly Start: Vector3;
	/**
	 * The ending point
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#End)
	 */
	End: Vector3;
	/**
	 * Indicates the volume of the bounds.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#Volume)
	 */
	readonly Volume: number;
	/**
	 * Creates a new Bounds object with the specified position and size.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#New)
	 */
	New(this: Bounds): Bounds;
	/**
	 * Creates a new Bounds object with the specified position and size.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#New)
	 */
	New(this: Bounds, position: Vector3, size: Vector3): Bounds;
	/**
	 * Calculates the closest point on the bounds to the specified point.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#ClosestPoint)
	 */
	ClosestPoint(this: Bounds, bounds: Bounds, point: Vector3): Vector3;
	/**
	 * Returns whether the bounds contain the specified point.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#Contains)
	 */
	Contains(this: Bounds, bounds: Bounds, point: Vector3): boolean;
	/**
	 * Expands the bounds by the specified amount.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#Encapsulate)
	 */
	Encapsulate(this: Bounds, bounds: Bounds, point: Vector3): Bounds;
	/**
	 * Expands the bounds by the specified amount.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#Expand)
	 */
	Expand(this: Bounds, bounds: Bounds, amount: number): Bounds;
	/**
	 * Determines whether the bounds intersect with another bounds.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#Intersects)
	 */
	Intersects(this: Bounds, bounds: Bounds, other: Bounds): boolean;
	/**
	 * Sets the minimum and maximum points of the bounds.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#SetMinMax)
	 */
	SetMinMax(this: Bounds, bounds: Bounds, min: Vector3, max: Vector3): Bounds;
	/**
	 * Calculates the distance from the bounds to the specified point.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#Distance)
	 */
	Distance(this: Bounds, bounds: Bounds, point: Vector3): number;
	/**
	 * Calculates the squared distance from the bounds to the specified point.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Bounds#SqrDistance)
	 */
	SqrDistance(this: Bounds, bounds: Bounds, point: Vector3): number;
}

interface BuiltInAudioAsset extends AudioAsset {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_BuiltInAudioAsset: unique symbol;
	/**
	 * The target audio to use
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/BuiltInAudioAsset#AudioPreset)
	 */
	AudioPreset: Enums["BuiltInAudioPreset"];
}

interface BuiltInFontAsset extends FontAsset {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_BuiltInFontAsset: unique symbol;
	/**
	 * Target font to use
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/BuiltInFontAsset#FontPreset)
	 */
	FontPreset: Enums["BuiltInTextFontPreset"];
	/**
	 * Font weight for this font
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/BuiltInFontAsset#FontWeight)
	 */
	FontWeight: Enums["FontWeight"];
	/**
	 * Font style for this font
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/BuiltInFontAsset#FontStyle)
	 */
	FontStyle: Enums["FontStyle"];
}

interface Camera extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Camera: unique symbol;
	/**
	 * Fires when camera has entered first person
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#FirstPersonEntered)
	 */
	readonly FirstPersonEntered: Event<() => void>;
	/**
	 * Fires when camera has exited first person
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#FirstPersonExited)
	 */
	readonly FirstPersonExited: Event<() => void>;
	/**
	 * Determines or returns the camera's current mode.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#Mode)
	 */
	Mode: Enums["CameraMode"];
	/**
	 * Determines or returns the camera's field of view.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#FOV)
	 */
	FOV: number;
	/**
	 * Determines whether or not the camera should clip through walls.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#ClipThroughWalls)
	 */
	ClipThroughWalls: boolean;
	/**
	 * The camera's minimum distance from the player in Follow mode.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#MinDistance)
	 */
	MinDistance: number;
	/**
	 * Determines camera's maximum distance from the player in Follow mode.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#MaxDistance)
	 */
	MaxDistance: number;
	/**
	 * Determines the distance between the camera and the player when the camera is in Follow mode.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#Distance)
	 */
	Distance: number;
	/**
	 * Determines the scroll move speed of the camera.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#ScrollSensitivity)
	 */
	ScrollSensitivity: number;
	/**
	 * Determines whether or not the camera should render in orthographic (2D) mode or not (3D).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#Orthographic)
	 */
	Orthographic: boolean;
	/**
	 * Determines whether or not to use lerping in Follow mode.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#FollowLerp)
	 */
	FollowLerp: boolean;
	/**
	 * Determines the lerp speed of the camera when lerping is enabled.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#LerpSpeed)
	 */
	LerpSpeed: number;
	/**
	 * Determines the half-size of the camera when in orthographic mode.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#OrthographicSize)
	 */
	OrthographicSize: number;
	/**
	 * Determines the camera's offset from its position.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#PositionOffset)
	 */
	PositionOffset: Vector3;
	/**
	 * Determines the camera's offset from its rotation.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#RotationOffset)
	 */
	RotationOffset: Vector3;
	/**
	 * Returns whether or not the camera is in first person.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#IsFirstPerson)
	 */
	readonly IsFirstPerson: boolean;
	/**
	 * Determine if camera can be ctrl locked.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#CanLock)
	 */
	CanLock: boolean;
	/**
	 * Multipler for camera sensitivity
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#SensitivityMultiplier)
	 */
	SensitivityMultiplier: number;
	/**
	 * Current sensitivity of the camera
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#Sensitivity)
	 */
	readonly Sensitivity: number;
	/**
	 * Determines the horizontal movement speed of the camera in Follow mode.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#HorizontalSpeed)
	 */
	HorizontalSpeed: number;
	/**
	 * Determines the vertical move speed of the camera.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#VerticalSpeed)
	 */
	VerticalSpeed: number;
	/**
	 * Determines the lerp amount when scrolling
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#ScrollLerpSpeed)
	 */
	ScrollLerpSpeed: number;
	/**
	 * Determine if camera is in Ctrl lock mode
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#CtrlLocked)
	 */
	CtrlLocked: boolean;
	/**
	 * Determine if camera should always be in locked mode
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#AlwaysLocked)
	 */
	AlwaysLocked: boolean;
	/**
	 * The target of Follow mode
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#Target)
	 */
	Target: Dynamic;
	/**
	 * Cast a ray from the camera at the specified ViewportPoint (Vector3 with components with values in range of 0 - 1 describing how far a point is to to right and to the top of the screen) into the game world
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#ViewportPointToRay)
	 */
	ViewportPointToRay(
		this: Camera,
		pos: Vector2,
		ignoreList: Array<Instance> | undefined,
		maxDistance: number | undefined,
	): RayResult;
	/**
	 * Cast a ray from the camera at screen point into the game world
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#ScreenPointToRay)
	 */
	ScreenPointToRay(
		this: Camera,
		pos: Vector2,
		ignoreList: Array<Instance> | undefined,
		maxDistance: number | undefined,
	): RayResult;
	/**
	 * Transforms `pos` from viewport space into screen space.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#ViewportToScreenPoint)
	 */
	ViewportToScreenPoint(this: Camera, pos: Vector2): Vector2;
	/**
	 * Transforms `pos` from viewport space into world space.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#ViewportToWorldPoint)
	 */
	ViewportToWorldPoint(this: Camera, pos: Vector2): Vector3;
	/**
	 * Transforms `pos` from world space into viewport space.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#WorldToViewportPoint)
	 */
	WorldToViewportPoint(this: Camera, pos: Vector3): Vector2;
	/**
	 * Transforms `pos` from world space into screen space.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#WorldToScreenPoint)
	 */
	WorldToScreenPoint(this: Camera, pos: Vector3): Vector2;
	/**
	 * Transforms `pos` from screen space into viewport space.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#ScreenToViewportPoint)
	 */
	ScreenToViewportPoint(this: Camera, pos: Vector2): Vector2;
	/**
	 * Transforms `pos` from screen space into world space.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Camera#ScreenToWorldPoint)
	 */
	ScreenToWorldPoint(this: Camera, pos: Vector2): Vector3;
}

interface CaptureService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CaptureService: unique symbol;
	/**
	 * Returns whenever the capture is on cooldown.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CaptureService#OnCooldown)
	 */
	readonly OnCooldown: boolean;
	/**
	 * Determines if user/scripts can take a picture.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CaptureService#CanCapture)
	 */
	CanCapture: boolean;
	/**
	 * Default capture overlay for all captures
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CaptureService#DefaultCaptureOverlay)
	 */
	DefaultCaptureOverlay: UIField;
	/**
	 * Attaches a spectator camera at dynamic for use with spectator mode.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CaptureService#SpectatorAttach)
	 */
	SpectatorAttach: Dynamic;
	/**
	 * Take a photo at dynamic
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CaptureService#TakePhotoAtDynamic)
	 */
	TakePhotoAtDynamic(
		this: CaptureService,
		dyn: Dynamic,
		photoSize: Vector2 | undefined,
		overlay: UIField | undefined,
	): void;
	/**
	 * Take photo at `pos` for position and `rot` for rotation, optional `photoSize` defines the size, and optional UI `overlay` can be passed to include it in the result photo.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CaptureService#TakePhotoAt)
	 */
	TakePhotoAt(
		this: CaptureService,
		pos: Vector3,
		rot: Vector3,
		photoSize: Vector2 | undefined,
		overlay: UIField | undefined,
	): void;
}

interface CharacterModel extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CharacterModel: unique symbol;
	/**
	 * The animator for this character
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CharacterModel#Animator)
	 */
	Animator: Animator;
	/**
	 * Get attachment dynamic from this character
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CharacterModel#GetAttachment)
	 */
	GetAttachment(this: CharacterModel, attachmentEnum: Enums["CharacterAttachment"]): Dynamic;
}

interface ChatService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ChatService: unique symbol;
	/**
	 * Fires when new chat message has been received from player
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ChatService#NewChatMessage)
	 */
	readonly NewChatMessage: Event<(sender: Player, message: string) => void>;
	/**
	 * Fires when new message has been received from either `BroadcastMessage` or `UnicastMessage`
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ChatService#MessageReceived)
	 */
	readonly MessageReceived: Event<(message: string) => void>;
	/**
	 * Fires when message has been declined by the server
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ChatService#MessageDeclined)
	 */
	readonly MessageDeclined: Event<() => void>;
	/**
	 * A callback function that filters chat messages before they are displayed to players.
```lua
Chat.ChatPredicate = function(plr: Player, msg: string)
    if msg == "miau" then
        Chat:UnicastMessage("no miau allowed", plr)
        return false
    end
    return true
end
```

	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ChatService#ChatPredicate)
	 */
	ChatPredicate: any;
	/**
	 * Sends a chat message to all players.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ChatService#BroadcastMessage)
	 */
	BroadcastMessage(this: ChatService, msg: string): void;
	/**
	 * Sends a chat message to a specific player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ChatService#UnicastMessage)
	 */
	UnicastMessage(this: ChatService, msg: string, plr: Player): void;
}

interface ClientScript extends Script {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ClientScript: unique symbol;
}

interface Color {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Color: unique symbol;
	/**
	 * Red color component
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Color#R)
	 */
	R: number;
	/**
	 * Green color component
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Color#G)
	 */
	G: number;
	/**
	 * Blue color component
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Color#B)
	 */
	B: number;
	/**
	 * Alpha (opacity) color component
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Color#A)
	 */
	A: number;
	/**
	 * Creates a new Color with the set R, G, B and A values
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Color#New)
	 */
	New(this: Color): Color;
	/**
	 * Creates a new Color with the set R, G, B and A values
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Color#New)
	 */
	New(this: Color, d: number): Color;
	/**
	 * Creates a new Color with the set R, G, B and A values
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Color#New)
	 */
	New(this: Color, r: number, g: number, b: number): Color;
	/**
	 * Creates a new Color with the set R, G, B and A values
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Color#New)
	 */
	New(this: Color, r: number, g: number, b: number, a: number): Color;
	/**
	 * Returns a random color with an alpha value of 1.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Color#Random)
	 */
	Random(this: Color): Color;
	/**
	 * Creates a new Color from the specified hex value.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Color#FromHex)
	 */
	FromHex(this: Color, hex: string): Color;
	/**
	 * Linearly interpolates colors a and b by t.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Color#Lerp)
	 */
	Lerp(this: Color, a: Color, b: Color, t: number): Color;
}

interface ColorAdjustModifier extends LightingModifier {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ColorAdjustModifier: unique symbol;
	/**
	 * Determine the brightness adjustment
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorAdjustModifier#Brightness)
	 */
	Brightness: number;
	/**
	 * Determine the contrast adjustment
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorAdjustModifier#Contrast)
	 */
	Contrast: number;
	/**
	 * Determine the saturation adjustment
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorAdjustModifier#Saturation)
	 */
	Saturation: number;
	/**
	 * Determine the tint color
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorAdjustModifier#TintColor)
	 */
	TintColor: Color;
}

interface ColorSeries {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ColorSeries: unique symbol;
	/**
	 * Returns the point count of this color series
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorSeries#PointCount)
	 */
	readonly PointCount: number;
	/**
	 * Create color series by this color range
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorSeries#New)
	 */
	New(this: ColorSeries): ColorSeries;
	/**
	 * Create color series by this color range
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorSeries#New)
	 */
	New(this: ColorSeries, min: Color, max: Color): ColorSeries;
	/**
	 * Clear this ColorSeries
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorSeries#Clear)
	 */
	Clear(this: ColorSeries): void;
	/**
	 * Sets the color at the specified point in the color series.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorSeries#SetColor)
	 */
	SetColor(this: ColorSeries, point: number, color: Color): void;
	/**
	 * Removes the point at the specified index from the color series.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorSeries#RemovePoint)
	 */
	RemovePoint(this: ColorSeries, point: number): void;
	/**
	 * Get all offsets
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorSeries#GetOffsets)
	 */
	GetOffsets(this: ColorSeries): Array<number>;
	/**
	 * Get all colors
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorSeries#GetColors)
	 */
	GetColors(this: ColorSeries): Array<Color>;
	/**
	 * Sets the offset at the specified point in the color series.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorSeries#SetOffset)
	 */
	SetOffset(this: ColorSeries, point: number, offset: number): void;
	/**
	 * Gets the color at the specified point in the color series.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorSeries#GetColor)
	 */
	GetColor(this: ColorSeries, point: number): Color;
	/**
	 * Gets the offset at the specified point in the color series.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorSeries#GetOffset)
	 */
	GetOffset(this: ColorSeries, point: number): number;
	/**
	 * Add color point to the series with offset
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorSeries#AddPoint)
	 */
	AddPoint(this: ColorSeries, offset: number, color: Color): number;
	/**
	 * Interpolates between colors in the series based on the parameter t.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorSeries#Lerp)
	 */
	Lerp(this: ColorSeries, t: number): Color;
}

interface ColorValue extends ValueBase {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ColorValue: unique symbol;
	/**
	 * The value of this object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ColorValue#Value)
	 */
	Value: Color;
}

interface CoreUIService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CoreUIService: unique symbol;
	/**
	 * Determines whether or not the user card (in the upper right hand corner above the leaderboard) is visible.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CoreUIService#UseUserCard)
	 */
	UseUserCard: boolean;
	/**
	 * Determines whether or not the chat box is visible.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CoreUIService#UseChat)
	 */
	UseChat: boolean;
	/**
	 * Determines whether or not the player's health bar is visible.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CoreUIService#UseHealthBar)
	 */
	UseHealthBar: boolean;
	/**
	 * Determines whether or not the player list/leaderboard is visible.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CoreUIService#UseLeaderboard)
	 */
	UseLeaderboard: boolean;
	/**
	 * Determines whether or not the hot bar is visible.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CoreUIService#UseHotbar)
	 */
	UseHotbar: boolean;
	/**
	 * Determines whether or not the backpack is togglable.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CoreUIService#UseBackpack)
	 */
	UseBackpack: boolean;
	/**
	 * Determines whether or not the menu button is visible.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CoreUIService#UseMenuButton)
	 */
	UseMenuButton: boolean;
	/**
	 * Determines whether or not the emote wheel is visible.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CoreUIService#UseEmoteWheel)
	 */
	UseEmoteWheel: boolean;
	/**
	 * Determines whether or not the player can respawn.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CoreUIService#CanRespawn)
	 */
	CanRespawn: boolean;
}

interface CreatorAddons extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CreatorAddons: unique symbol;
	/**
	 * Register an addon
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorAddons#Register)
	 */
	Register(this: CreatorAddons, identifier: string): AddonObject;
}

interface CreatorContextService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CreatorContextService: unique symbol;
}

interface CreatorGUI extends PlayerGUI {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CreatorGUI: unique symbol;
}

interface CreatorHistory extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CreatorHistory: unique symbol;
	/**
	 * Creates new action
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorHistory#NewAction)
	 */
	NewAction(this: CreatorHistory, title: string): void;
	/**
	 * Add do callback
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorHistory#AddDoCallback)
	 */
	AddDoCallback(this: CreatorHistory, callback: any): void;
	/**
	 * Add undo callback
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorHistory#AddUndoCallback)
	 */
	AddUndoCallback(this: CreatorHistory, callback: any): void;
	/**
	 * Commit the current action
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorHistory#CommitAction)
	 */
	CommitAction(this: CreatorHistory): void;
}

interface CreatorInterface {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CreatorInterface: unique symbol;
	/**
	 * Returns the target tool mode
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorInterface#ToolMode)
	 */
	readonly ToolMode: Enums["ToolMode"];
	/**
	 * Returns the target part color
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorInterface#TargetPartColor)
	 */
	readonly TargetPartColor: Color;
	/**
	 * Returns the target part material
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorInterface#TargetPartMaterial)
	 */
	readonly TargetPartMaterial: Enums["PartMaterial"];
	/**
	 * Returns the move snapping value
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorInterface#MoveSnapEnabled)
	 */
	readonly MoveSnapEnabled: boolean;
	/**
	 * Returns whenever the move snapping is enabled by the user
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorInterface#MoveSnapping)
	 */
	readonly MoveSnapping: number;
	/**
	 * Returns the move snapping value defined by the user
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorInterface#UserMoveSnapping)
	 */
	readonly UserMoveSnapping: number;
	/**
	 * Returns whenever the rotate snapping is enabled by the user
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorInterface#RotateSnapEnabled)
	 */
	readonly RotateSnapEnabled: boolean;
	/**
	 * Returns the rotate snapping value
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorInterface#RotateSnapping)
	 */
	readonly RotateSnapping: number;
	/**
	 * Returns the rotate snapping value defined by the user
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorInterface#UserRotateSnapping)
	 */
	readonly UserRotateSnapping: number;
}

interface CreatorSelections extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CreatorSelections: unique symbol;
	/**
	 * Fires when an instance has been selected
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorSelections#Selected)
	 */
	readonly Selected: Event<() => void>;
	/**
	 * Fires when an instance has been deselected
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorSelections#Deselected)
	 */
	readonly Deselected: Event<() => void>;
	/**
	 * Select a instance
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorSelections#Select)
	 */
	Select(this: CreatorSelections, instance: Instance): void;
	/**
	 * Select all children of the instance
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorSelections#SelectChild)
	 */
	SelectChild(this: CreatorSelections, instance: Instance): void;
	/**
	 * Get all selected instances
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorSelections#GetSelected)
	 */
	GetSelected(this: CreatorSelections): Array<Instance>;
	/**
	 * Deselect the instance
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorSelections#Deselect)
	 */
	Deselect(this: CreatorSelections, instance: Instance): void;
	/**
	 * Deselect all, then select the instance
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorSelections#SelectOnly)
	 */
	SelectOnly(this: CreatorSelections, instance: Instance): void;
	/**
	 * Deselect all instances
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorSelections#DeselectAll)
	 */
	DeselectAll(this: CreatorSelections): void;
	/**
	 * Check if instance has been selected
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorSelections#HasSelected)
	 */
	HasSelected(this: CreatorSelections, instance: Instance): boolean;
}

interface CreatorService {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CreatorService: unique symbol;
	/**
	 * Fires when local testing starts
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorService#LocalTestStarted)
	 */
	readonly LocalTestStarted: Event<() => void>;
	/**
	 * Fires when local testing ends
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorService#LocalTestStopped)
	 */
	readonly LocalTestStopped: Event<() => void>;
	/**
	 * The interface
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorService#Interface)
	 */
	readonly Interface: CreatorInterface;
	/**
	 * Current active game
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorService#CurrentGame)
	 */
	readonly CurrentGame: Game;
	/**
	 * Returns true if local test is active
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/CreatorService#LocalTestActive)
	 */
	readonly LocalTestActive: boolean;
}

interface Datastore {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Datastore: unique symbol;
	/**
	 * The key identifying this Datastore connection.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Datastore#Key)
	 */
	readonly Key: string;
	/**
	 * Retrieves a value from the datastore asynchronously using the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Datastore#GetAsync)
	 */
	GetAsync(this: Datastore, key: string): any;
	/**
	 * Stores a value in the datastore asynchronously using the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Datastore#SetAsync)
	 */
	SetAsync(this: Datastore, key: string, value: any): void;
	/**
	 * Removes a value from the datastore asynchronously using the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Datastore#RemoveAsync)
	 */
	RemoveAsync(this: Datastore, key: string): void;
	/**
	 * Disconnect this datastore connection, this should be called when you finish using the datastore.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Datastore#Disconnect)
	 */
	Disconnect(this: Datastore): void;
}

interface DatastoreService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_DatastoreService: unique symbol;
	/**
	 * Attempts to get a Datastore object from the Datastore service.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/DatastoreService#GetDatastore)
	 */
	GetDatastore(this: DatastoreService, key: string): Datastore;
}

interface Decal extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Decal: unique symbol;
	/**
	 * The image texture applied to the decal.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Decal#Image)
	 */
	Image: ImageAsset;
	/**
	 * Energy multiplier for the decal.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Decal#Energy)
	 */
	Energy: number;
	/**
	 * The color tint applied to the decal.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Decal#Color)
	 */
	Color: Color;
}

interface Dynamic extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Dynamic: unique symbol;
	/**
	 * The position of the object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#Position)
	 */
	Position: Vector3;
	/**
	 * The rotation of the object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#Rotation)
	 */
	Rotation: Vector3;
	/**
	 * The size of the object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#Size)
	 */
	Size: Vector3;
	/**
	 * The position of the object relative to its parent.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#LocalPosition)
	 */
	LocalPosition: Vector3;
	/**
	 * The rotation of the object relative to its parent.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#LocalRotation)
	 */
	LocalRotation: Vector3;
	/**
	 * The size of the object relative to its parent.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#LocalSize)
	 */
	LocalSize: Vector3;
	/**
	 * The rotation of the object represented as a quaternion.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#Quaternion)
	 */
	Quaternion: Quaternion;
	/**
	 * The local rotation of the object represented as a quaternion.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#LocalQuaternion)
	 */
	LocalQuaternion: Quaternion;
	/**
	 * Determines whether the object can be selected in the Creator.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#Locked)
	 */
	Locked: boolean;
	/**
	 * The forward direction vector of the object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#Forward)
	 */
	readonly Forward: Vector3;
	/**
	 * The right direction vector of the object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#Right)
	 */
	readonly Right: Vector3;
	/**
	 * The up direction vector of the object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#Up)
	 */
	readonly Up: Vector3;
	/**
	 * Orients the object to look at a target with a specified up vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#LookAt)
	 */
	LookAt(this: Dynamic, target: any): void;
	/**
	 * Orients the object to look at a target with a specified up vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#LookAt)
	 */
	LookAt(this: Dynamic, target: any, up: Vector3): void;
	/**
	 * Moves the transform in the direction and distance of translation.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#Translate)
	 */
	Translate(this: Dynamic, translation: Vector3): void;
	/**
	 * Rotates the object around a point by the specified Euler angles.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#RotateAround)
	 */
	RotateAround(this: Dynamic, point: Vector3, axis: Vector3, angle: number): void;
	/**
	 * Rotates the object by the specified Euler angles.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#Rotate)
	 */
	Rotate(this: Dynamic, eulerAngles: Vector3): void;
	/**
	 * Gets the bounding box of the object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Dynamic#GetBounds)
	 */
	GetBounds(this: Dynamic): Bounds;
}

interface Entity extends Physical {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Entity: unique symbol;
	/**
	 * The color of the entity.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#Color)
	 */
	Color: Color;
	/**
	 * Determines whether the entity casts shadows.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#CastShadows)
	 */
	CastShadows: boolean;
	/**
	 * Determines whether the part can be used as a spawn location or not.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#IsSpawn)
	 */
	IsSpawn: boolean;
	/**
	 * Determines whether the entity is affected by gravity.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#UseGravity)
	 */
	UseGravity: boolean;
	/**
	 * Determines the mass of the entity.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#Mass)
	 */
	Mass: number;
	/**
	 * Determines the friction of the entity.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#Friction)
	 */
	Friction: number;
	/**
	 * Determines the drag (air resistance) of the entity.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#Drag)
	 */
	Drag: number;
	/**
	 * Determines the angular drag of the entity.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#AngularDrag)
	 */
	AngularDrag: number;
	/**
	 * Determines the bounciness of the entity.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#Bounciness)
	 */
	Bounciness: number;
	/**
	 * Applies a force to the entity.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#AddForce)
	 */
	AddForce(this: Entity, force: Vector3, mode: Enums["ForceMode"] | undefined): void;
	/**
	 * Applies a rotational force to the entity.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#AddTorque)
	 */
	AddTorque(this: Entity, force: Vector3, mode: Enums["ForceMode"] | undefined): void;
	/**
	 * Applies a force to the entity from a specific position.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#AddForceAtPosition)
	 */
	AddForceAtPosition(this: Entity, force: Vector3, position: Vector3, mode: Enums["ForceMode"] | undefined): void;
	/**
	 * Adds a force to the part relative to its own rotation.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#AddRelativeForce)
	 */
	AddRelativeForce(this: Entity, force: Vector3, mode: Enums["ForceMode"] | undefined): void;
	/**
	 * Adds a rotational force to the part relative to its own rotation.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Entity#AddRelativeTorque)
	 */
	AddRelativeTorque(this: Entity, torque: Vector3, mode: Enums["ForceMode"] | undefined): void;
}

interface Environment extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Environment: unique symbol;
	/**
	 * Determines the current camera which player is using to view
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Environment#CurrentCamera)
	 */
	CurrentCamera: Camera;
	/**
	 * The direction and strength of gravity in the world.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Environment#Gravity)
	 */
	Gravity: Vector3;
	/**
	 * The height at which unanchored parts are destroyed when they fall below it.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Environment#PartDestroyHeight)
	 */
	PartDestroyHeight: number;
	/**
	 * Determines whether or not to automatically build a navigation mesh for NPC pathfinding. This property is disabled by default so there are no performance issues with larger maps.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Environment#AutoGenerateNavMesh)
	 */
	AutoGenerateNavMesh: boolean;
	/**
	 * Casts a ray from origin with a specified direction and returns a RayResult for the first hit object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Environment#Raycast)
	 */
	Raycast(
		this: Environment,
		origin: Vector3,
		direction: Vector3,
		maxDistance: number | undefined,
		ignoreList: Array<Instance> | undefined,
	): RayResult;
	/**
	 * Casts a ray from origin with a specified direction and returns a RayResult array for all hit objects.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Environment#RaycastAll)
	 */
	RaycastAll(
		this: Environment,
		origin: Vector3,
		direction: Vector3,
		maxDistance: number | undefined,
		ignoreList: Array<Instance> | undefined,
	): Array<RayResult>;
	/**
	 * Returns a list of instances intersecting with the sphere in the given position and radius.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Environment#OverlapSphere)
	 */
	OverlapSphere(
		this: Environment,
		origin: Vector3,
		radius: number,
		ignoreList: Array<Instance> | undefined,
	): Array<Instance>;
	/**
	 * Returns a list of instances intersecting with the box in the given position, size and rotation.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Environment#OverlapBox)
	 */
	OverlapBox(
		this: Environment,
		pos: Vector3,
		size: Vector3,
		rot: Vector3,
		ignoreList: Array<Instance> | undefined,
	): Array<Instance>;
	/**
	 * Rebuilds the navigation mesh which determines the empty space where NPCs can pathfind in.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Environment#RebuildNavMesh)
	 */
	RebuildNavMesh(this: Environment): void;
	/**
	 * Returns a point on the navigation mesh at the given position.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Environment#GetPointOnNavMesh)
	 */
	GetPointOnNavMesh(this: Environment, toPoint: Vector3): Vector3;
}

interface Explosion extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Explosion: unique symbol;
	/**
	 * Fires when this explosion affects a hit
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Explosion#Hitted)
	 */
	readonly Hitted: Event<(hit: Instance) => void>;
	/**
	 * Determines the radius of this explosion
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Explosion#Radius)
	 */
	Radius: number;
	/**
	 * Determines the force of this explosion that will be applied to affected hits
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Explosion#Force)
	 */
	Force: number;
	/**
	 * Determines if this explosion should affect anchored parts or not
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Explosion#AffectAnchored)
	 */
	AffectAnchored: boolean;
	/**
	 * Damage that is affected to player
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Explosion#Damage)
	 */
	Damage: number;
	/**
	 * A predicate function deciding whenever this part should be accepted or not
    
Example usage:
```lua
explosion.AffectPredicate = function(hit)
  -- always explode
  return true
end
```
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Explosion#AffectPredicate)
	 */
	AffectPredicate: any;
}

interface FileLinkAsset extends BaseAsset {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_FileLinkAsset: unique symbol;
	/**
	 * The ID of the file
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/FileLinkAsset#LinkedID)
	 */
	LinkedID: string;
}

interface FilterService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_FilterService: unique symbol;
	/**
	 * Filter a string
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/FilterService#Filter)
	 */
	Filter(this: FilterService, input: string): string;
}

interface Folder extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Folder: unique symbol;
}

interface FontAsset extends ResourceAsset {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_FontAsset: unique symbol;
}

interface Game extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Game: unique symbol;
	/**
	 * Fires when the game is ready
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Game#Ready)
	 */
	readonly Ready: Event<() => void>;
	/**
	 * Fires every frame after the place has been rendered. The `delta` parameter is the time between the last frame and the current.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Game#Rendered)
	 */
	readonly Rendered: Event<(delta: number) => void>;
	/**
	 * Returns true if this current session is being tested locally
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Game#IsLocalTest)
	 */
	readonly IsLocalTest: boolean;
	/**
	 * The ID of the current Polytoria place.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Game#GameID)
	 */
	readonly GameID: number;
	/**
	 * The server ID of the current instance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Game#ServerID)
	 */
	readonly ServerID: number;
	/**
	 * The uptime of this game in seconds.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Game#UpTime)
	 */
	readonly UpTime: number;
	/**
	 * A synchronized clock that represents the server's current time.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Game#ServerTime)
	 */
	readonly ServerTime: number;
	/**
	 * The total number of instances currently loaded.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Game#InstanceCount)
	 */
	readonly InstanceCount: number;
}

interface Grabbable extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Grabbable: unique symbol;
	/**
	 * Fires when this object has been grabbed
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Grabbable#Grabbed)
	 */
	readonly Grabbed: Event<(grabber: Player) => void>;
	/**
	 * Fires when this object has been released
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Grabbable#Released)
	 */
	readonly Released: Event<() => void>;
	/**
	 * Determines the force used to drag this object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Grabbable#Force)
	 */
	Force: number;
	/**
	 * Determines the max range that this object can be dragged.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Grabbable#MaxRange)
	 */
	MaxRange: number;
	/**
	 * Determines if dragging this object should affect physics.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Grabbable#UseDragForce)
	 */
	UseDragForce: boolean;
	/**
	 * Determines the permission mode for this grabber
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Grabbable#PermissionMode)
	 */
	PermissionMode: Enums["GrabbablePermissionMode"];
	/**
	 * Returns the current dragger
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Grabbable#Dragger)
	 */
	readonly Dragger: Player;
	/**
	 * A predicate function deciding whenever this player can grab this object. `PermissionMode` must be set to `GrabbablePermissionMode.Scripted`

Example usage:
```lua
grabbable.PermissionMode = Enums.GrabbablePermissionMode.Scripted
grabbable.PermissionPredicate = function(player)
  return player.Name == "Player1"
end
```
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Grabbable#PermissionPredicate)
	 */
	PermissionPredicate: any;
}

interface GradientImageAsset extends ImageAsset {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_GradientImageAsset: unique symbol;
	/**
	 * The color series for this gradient
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientImageAsset#Series)
	 */
	Series: ColorSeries;
	/**
	 * Determines the width of this image
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientImageAsset#Width)
	 */
	Width: number;
	/**
	 * Determines the height of this image
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientImageAsset#Height)
	 */
	Height: number;
	/**
	 * Determines the fill mode of the gradient
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientImageAsset#Fill)
	 */
	Fill: Enums["GradientImageFill"];
	/**
	 * Determines the starting point of the gradient
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientImageAsset#FillFrom)
	 */
	FillFrom: Vector2;
	/**
	 * Determines the ending point of the gradient
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientImageAsset#FillTo)
	 */
	FillTo: Vector2;
}

interface GradientSky extends Sky {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_GradientSky: unique symbol;
	/**
	 * Determines the color emitting off the sun.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientSky#SunDiscColor)
	 */
	SunDiscColor: Color;
	/**
	 * Determines the multiplier of the sun.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientSky#SunDiscMultiplier)
	 */
	SunDiscMultiplier: number;
	/**
	 * Determines the exponent of the sun.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientSky#SunDiscExponent)
	 */
	SunDiscExponent: number;
	/**
	 * Determines the color of the sun halo.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientSky#SunHaloColor)
	 */
	SunHaloColor: Color;
	/**
	 * Determines the exponent of the sun halo.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientSky#SunHaloExponent)
	 */
	SunHaloExponent: number;
	/**
	 * Determines the contribution of the sun halo.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientSky#SunHaloContribution)
	 */
	SunHaloContribution: number;
	/**
	 * Determines the horizon line's color.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientSky#HorizonLineColor)
	 */
	HorizonLineColor: Color;
	/**
	 * Determines the horizon line's exponent.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientSky#HorizonLineExponent)
	 */
	HorizonLineExponent: number;
	/**
	 * Determines how much the horizon line contributes.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientSky#HorizonLineContribution)
	 */
	HorizonLineContribution: number;
	/**
	 * Determines the top color of the gradient.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientSky#SkyGradientTop)
	 */
	SkyGradientTop: Color;
	/**
	 * Determines the bottom color of the gradient.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientSky#SkyGradientBottom)
	 */
	SkyGradientBottom: Color;
	/**
	 * Determines the gradient's exponent.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GradientSky#SkyGradientExponent)
	 */
	SkyGradientExponent: number;
}

interface GUI extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_GUI: unique symbol;
	/**
	 * Determines whether the GUI is visible or not.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GUI#Visible)
	 */
	Visible: boolean;
	/**
	 * Determines the ZIndex (layer) of the GUI.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GUI#ZIndex)
	 */
	ZIndex: number;
}

interface GUI3D extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_GUI3D: unique symbol;
	/**
	 * Determines the canvas size for this GUI
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GUI3D#CanvasSize)
	 */
	CanvasSize: Vector2;
	/**
	 * Determines if this GUI3D should be affected by lighting
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GUI3D#Shaded)
	 */
	Shaded: boolean;
	/**
	 * Determines if this GUI3D always face the camera?
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GUI3D#FaceCamera)
	 */
	FaceCamera: boolean;
	/**
	 * Determines if the background should be transparent. Recommended to be set to false if transparent background is not needed.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/GUI3D#Transparent)
	 */
	Transparent: boolean;
}

interface Hidden extends HiddenBase {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Hidden: unique symbol;
}

interface HiddenBase extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_HiddenBase: unique symbol;
}

interface HttpRequestData {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_HttpRequestData: unique symbol;
	/**
	 * The target endpoint of the HTTP request.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpRequestData#URL)
	 */
	URL: string;
	/**
	 * The HTTP method used for the request.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpRequestData#Method)
	 */
	Method: Enums["HttpRequestMethod"];
	/**
	 * The payload sent with the request.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpRequestData#Body)
	 */
	Body: string;
	/**
	 * A table of HTTP headers to include with the request, represented as key-value pairs.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpRequestData#Headers)
	 */
	Headers: any;
	/**
	 * Creates and returns a new instance of `HttpRequestData`
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpRequestData#New)
	 */
	New(this: HttpRequestData): HttpRequestData;
}

interface HttpResponseData {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_HttpResponseData: unique symbol;
	/**
	 * Indicates whether the HTTP request completed successfully.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpResponseData#Success)
	 */
	readonly Success: boolean;
	/**
	 * The HTTP status code returned by the server.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpResponseData#StatusCode)
	 */
	readonly StatusCode: number;
	/**
	 * A table containing the HTTP response headers returned by the server, represented as key-value pairs.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpResponseData#Headers)
	 */
	readonly Headers: any;
	/**
	 * The response payload returned by the server as a string.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpResponseData#Body)
	 */
	readonly Body: string;
	/**
	 * The response payload returned by the server as a buffer.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpResponseData#Buffer)
	 */
	readonly Buffer: any;
}

interface HttpService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_HttpService: unique symbol;
	/**
	 * Send a request using the `HttpRequestData`
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpService#RequestAsync)
	 */
	RequestAsync(this: HttpService, data: HttpRequestData): HttpResponseData;
	/**
	 * Sends a GET request to the specified URL.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpService#GetAsync)
	 */
	GetAsync(this: HttpService, url: string, headers: any | undefined): string;
	/**
	 * Sends a POST request to the specified URL.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpService#PostAsync)
	 */
	PostAsync(this: HttpService, url: string, body: string, headers: any | undefined): string;
	/**
	 * Sends a PUT request to the specified URL.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpService#PutAsync)
	 */
	PutAsync(this: HttpService, url: string, body: string, headers: any | undefined): string;
	/**
	 * Sends a DELETE request to the specified url.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpService#DeleteAsync)
	 */
	DeleteAsync(this: HttpService, url: string, body: string, headers: any | undefined): string;
	/**
	 * Sends a PATCH request to the specified url.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpService#PatchAsync)
	 */
	PatchAsync(this: HttpService, url: string, body: string, headers: any | undefined): string;
	/**
	 * Sends a GET request to the specified url, and return the response as buffer.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpService#GetBufferAsync)
	 */
	GetBufferAsync(this: HttpService, url: string, headers: any | undefined): any;
	/**
	 * Sends a POST request to the specified url, and return the response as buffer.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpService#PostBufferAsync)
	 */
	PostBufferAsync(this: HttpService, url: string, body: string, headers: any | undefined): any;
	/**
	 * Sends a PUT request to the specified url, and return the response as buffer.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpService#PutBufferAsync)
	 */
	PutBufferAsync(this: HttpService, url: string, body: string, headers: any | undefined): any;
	/**
	 * Sends a DELETE request to the specified url, and return the response as buffer.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpService#DeleteBufferAsync)
	 */
	DeleteBufferAsync(this: HttpService, url: string, body: string, headers: any | undefined): any;
	/**
	 * Sends a PATCH request to the specified url, and return the response as buffer.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/HttpService#PatchBufferAsync)
	 */
	PatchBufferAsync(this: HttpService, url: string, body: string, headers: any | undefined): any;
}

interface Image3D extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Image3D: unique symbol;
	/**
	 * Specifies the image of the decal.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Image3D#Image)
	 */
	Image: ImageAsset;
	/**
	 * The scale of the texture on the decal.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Image3D#TextureScale)
	 */
	TextureScale: Vector2;
	/**
	 * The offset of the texture on the decal.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Image3D#TextureOffset)
	 */
	TextureOffset: Vector2;
	/**
	 * Determines the color of the decal.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Image3D#Color)
	 */
	Color: Color;
	/**
	 * Determines whether or not the decal should cast shadows.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Image3D#CastShadows)
	 */
	CastShadows: boolean;
	/**
	 * Determines whether or not the decal should be affected by lighting.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Image3D#Shaded)
	 */
	Shaded: boolean;
	/**
	 * Determines whether or not the decal should always face the camera.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Image3D#FaceCamera)
	 */
	FaceCamera: boolean;
}

interface ImageAsset extends ResourceAsset {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ImageAsset: unique symbol;
}

interface ImageSky extends Sky {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ImageSky: unique symbol;
	/**
	 * The image of the top side of the skybox.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ImageSky#TopImage)
	 */
	TopImage: ImageAsset;
	/**
	 * The image of the bottom side of the skybox.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ImageSky#BottomImage)
	 */
	BottomImage: ImageAsset;
	/**
	 * The image of the left side of the skybox.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ImageSky#LeftImage)
	 */
	LeftImage: ImageAsset;
	/**
	 * The image of the right side of the skybox.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ImageSky#RightImage)
	 */
	RightImage: ImageAsset;
	/**
	 * The image of the front side of the skybox.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ImageSky#FrontImage)
	 */
	FrontImage: ImageAsset;
	/**
	 * The image of the back side of the skybox.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ImageSky#BackImage)
	 */
	BackImage: ImageAsset;
}

interface InputAction {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_InputAction: unique symbol;
}

interface InputActionAxis extends InputAction {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_InputActionAxis: unique symbol;
	/**
	 * Collection of negative inputs
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputActionAxis#Negative)
	 */
	Negative: InputButtonCollection;
	/**
	 * Collection of positive inputs
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputActionAxis#Positive)
	 */
	Positive: InputButtonCollection;
	/**
	 * The value of the input
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputActionAxis#Value)
	 */
	readonly Value: number;
}

interface InputActionButton extends InputAction {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_InputActionButton: unique symbol;
	/**
	 * Fires when this button has been pressed
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputActionButton#Pressed)
	 */
	readonly Pressed: Event<() => void>;
	/**
	 * Fires when this button has been released
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputActionButton#Released)
	 */
	readonly Released: Event<() => void>;
	/**
	 * Collection of button inputs.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputActionButton#Buttons)
	 */
	readonly Buttons: InputButtonCollection;
	/**
	 * Returns true if any of the button in the collection is currently being pressed.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputActionButton#IsPressed)
	 */
	IsPressed: boolean;
	/**
	 * Returns the current analog input of the button.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputActionButton#Weight)
	 */
	Weight: number;
}

interface InputActionVector2 extends InputAction {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_InputActionVector2: unique symbol;
	/**
	 * Collection of up inputs.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputActionVector2#Up)
	 */
	Up: InputButtonCollection;
	/**
	 * Collection of down inputs.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputActionVector2#Down)
	 */
	Down: InputButtonCollection;
	/**
	 * Collection of left inputs.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputActionVector2#Left)
	 */
	Left: InputButtonCollection;
	/**
	 * Collection of right inputs.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputActionVector2#Right)
	 */
	Right: InputButtonCollection;
	/**
	 * The value of this input
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputActionVector2#Value)
	 */
	readonly Value: Vector2;
}

interface InputButton {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_InputButton: unique symbol;
	/**
	 * Key code for this button
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputButton#KeyCode)
	 */
	KeyCode: Enums["KeyCode"];
	/**
	 * Create new button of this keycode
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputButton#New)
	 */
	New(this: InputButton): InputButton;
	/**
	 * Create new button of this keycode
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputButton#New)
	 */
	New(this: InputButton, key: Enums["KeyCode"]): InputButton;
}

interface InputButtonCollection {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_InputButtonCollection: unique symbol;
	/**
	 * Add new input button
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputButtonCollection#AddButton)
	 */
	AddButton(this: InputButtonCollection, btn: InputButton): void;
	/**
	 * Remove existing input button
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputButtonCollection#RemoveButton)
	 */
	RemoveButton(this: InputButtonCollection, btn: InputButton): void;
}

interface InputService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_InputService: unique symbol;
	/**
	 * Fires when the game has been focused
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#GameFocused)
	 */
	readonly GameFocused: Event<() => void>;
	/**
	 * Fires when the game has been unfocused
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#GameUnfocused)
	 */
	readonly GameUnfocused: Event<() => void>;
	/**
	 * Fires when gamepad is connected
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#GamepadConnected)
	 */
	readonly GamepadConnected: Event<() => void>;
	/**
	 * Fires when gamepad has been disconnected
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#GamepadDisconnected)
	 */
	readonly GamepadDisconnected: Event<() => void>;
	/**
	 * Fires when key has been pressed
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#KeyDown)
	 */
	readonly KeyDown: Event<(keycode: Enums["KeyCode"], gameFocused: boolean) => void>;
	/**
	 * Fires when key has been released
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#KeyUp)
	 */
	readonly KeyUp: Event<(keycode: Enums["KeyCode"], gameFocused: boolean) => void>;
	/**
	 * Fires when analog input has been changed
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#AxisValueChanged)
	 */
	readonly AxisValueChanged: Event<(keycode: Enums["KeyCode"], value: number) => void>;
	/**
	 * Indicates whether the game window is currently focused.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#IsWindowFocused)
	 */
	readonly IsWindowFocused: boolean;
	/**
	 * Indicates whether the input device is a touchscreen.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#IsTouchscreen)
	 */
	readonly IsTouchscreen: boolean;
	/**
	 * Indicates whether the game is currently focused.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#IsGameFocused)
	 */
	readonly IsGameFocused: boolean;
	/**
	 * Indicates whether an input is currently focused.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#IsInputFocused)
	 */
	readonly IsInputFocused: boolean;
	/**
	 * Indicates whether a gamepad is currently connected.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#IsGamepadConnected)
	 */
	readonly IsGamepadConnected: boolean;
	/**
	 * Indicates whether the game menu is currently opened.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#IsMenuOpened)
	 */
	readonly IsMenuOpened: boolean;
	/**
	 * Determines whether the cursor is currently locked.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#CursorLocked)
	 */
	CursorLocked: boolean;
	/**
	 * Determines whether the cursor is currently visible.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#CursorVisible)
	 */
	CursorVisible: boolean;
	/**
	 * Indicates the current position of the mouse cursor.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#MousePosition)
	 */
	readonly MousePosition: Vector2;
	/**
	 * Indicates the width of the screen.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#ScreenWidth)
	 */
	readonly ScreenWidth: number;
	/**
	 * Indicates the height of the screen.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#ScreenHeight)
	 */
	readonly ScreenHeight: number;
	/**
	 * Returns the 3D world-space position corresponding to the current mouse cursor location.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#GetMouseWorldPosition)
	 */
	GetMouseWorldPosition(this: InputService, ignoreList: Array<Instance> | undefined): Vector3;
	/**
	 * Returns the current Vector2 value of the action.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#GetVector2)
	 */
	GetVector2(this: InputService, actionName: string): InputActionVector2;
	/**
	 * Returns true if the specified button is being held down.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#GetButton)
	 */
	GetButton(this: InputService, actionName: string): InputActionButton;
	/**
	 * Returns the value of the specified axis.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#GetAxis)
	 */
	GetAxis(this: InputService, actionName: string): InputActionAxis;
	/**
	 * Bind new Button Input Action
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#BindButton)
	 */
	BindButton(this: InputService, name: string): InputActionButton;
	/**
	 * Bind new Axis Input Action
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#BindAxis)
	 */
	BindAxis(this: InputService, name: string): InputActionAxis;
	/**
	 * Bind new Vector2 Input Action
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InputService#BindVector2)
	 */
	BindVector2(this: InputService, name: string): InputActionVector2;
}

interface InsertService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_InsertService: unique symbol;
	/**
	 * Inserts a model with the specified ID.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InsertService#ModelAsync)
	 */
	ModelAsync(this: InsertService, id: number): Instance;
	/**
	 * Inserts an accessory with the specified ID.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InsertService#AccessoryAsync)
	 */
	AccessoryAsync(this: InsertService, id: number): Accessory;
	/**
	 * Insert a new tool with the specified ID
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InsertService#ToolAsync)
	 */
	ToolAsync(this: InsertService, id: number): Tool;
}

interface Instance extends NetworkedObject {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Instance: unique symbol;
	/**
	 * Fires when child has been added to this instance
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#ChildAdded)
	 */
	readonly ChildAdded: Event<(child: Instance) => void>;
	/**
	 * Fires when child has been removed from this instance (either via reparent or delete)
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#ChildRemoved)
	 */
	readonly ChildRemoved: Event<(child: Instance) => void>;
	/**
	 * Fires when child is being deleted from this instance
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#ChildDeleting)
	 */
	readonly ChildDeleting: Event<(child: Instance) => void>;
	/**
	 * Fires when child has been deleted from this instance
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#ChildDeleted)
	 */
	readonly ChildDeleted: Event<(child: Instance) => void>;
	/**
	 * Defines the parent of this instance in the hierarchy.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#Parent)
	 */
	Parent: Instance;
	/**
	 * Determine if children is editable, this is to be used if this instance is a Linked model. Only used in creator.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#EditableChildren)
	 */
	EditableChildren: boolean;
	/**
	 * Tags associated with this instance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#Tags)
	 */
	Tags: Array<string>;
	/**
	 * Determines if this instance should be saved during the saving process. Useful for addons that wants to create a temporary instance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#Archivable)
	 */
	Archivable: boolean;
	/**
	 * Gets all descendants of this instance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#GetDescendants)
	 */
	GetDescendants(this: Instance): Array<Instance>;
	/**
	 * Finds a child of this instance by name.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#FindChild)
	 */
	FindChild(this: Instance, name: string): Instance;
	/**
	 * Wait for children to be added.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#WaitChild)
	 */
	WaitChild(this: Instance, name: string, timeoutSec: number | undefined): Instance;
	/**
	 * Finds a child of this instance by class name.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#FindChildByClass)
	 */
	FindChildByClass(this: Instance, className: string): Instance;
	/**
	 * Find first child with the specified tag
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#FindChildWithTag)
	 */
	FindChildWithTag(this: Instance, tag: string): Instance;
	/**
	 * Get children with the specified tag
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#GetChildrenWithTag)
	 */
	GetChildrenWithTag(this: Instance, tag: string): Array<Instance>;
	/**
	 * Find ancestor by the specified class name
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#FindAncestorByClass)
	 */
	FindAncestorByClass(this: Instance, className: string): Instance;
	/**
	 * Find child by it's index (index for this function starts from 0)
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#FindChildByIndex)
	 */
	FindChildByIndex(this: Instance, index: number): Instance;
	/**
	 * Move children to specified index (index for this function starts from 0)
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#MoveChild)
	 */
	MoveChild(this: Instance, child: Instance, index: number): void;
	/**
	 * Gets all children of this instance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#GetChildren)
	 */
	GetChildren(this: Instance): Array<Instance>;
	/**
	 * Gets all children of this instance that are of the specified class.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#GetChildrenOfClass)
	 */
	GetChildrenOfClass(this: Instance, className: string): Array<Instance>;
	/**
	 * Determines if this instance is an ancestor of the given instance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#IsAncestorOf)
	 */
	IsAncestorOf(this: Instance, instance: Instance): boolean;
	/**
	 * Determines if this instance is a descendant of the given instance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#IsDescendantOf)
	 */
	IsDescendantOf(this: Instance, instance: Instance): boolean;
	/**
	 * Determines if this instance is a descendant of the given class.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#IsDescendantOfClass)
	 */
	IsDescendantOfClass(this: Instance, className: string): boolean;
	/**
	 * Creates a new instance of the specified class.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#New)
	 */
	New(this: Instance, className: string, parent: Instance | undefined): Instance;
	/**
	 * Adds a tag to this instance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#AddTag)
	 */
	AddTag(this: Instance, tag: string): void;
	/**
	 * Removes a tag from this instance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#RemoveTag)
	 */
	RemoveTag(this: Instance, tag: string): void;
	/**
	 * Checks if this instance has the specified tag.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#HasTag)
	 */
	HasTag(this: Instance, tag: string): boolean;
	/**
	 * Reparent this instance to another instance
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#Reparent)
	 */
	Reparent(this: Instance, to: Instance): void;
	/**
	 * Gets the parent of this instance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#GetParent)
	 */
	GetParent(this: Instance): Instance;
	/**
	 * Sets the parent of this instance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Instance#SetParent)
	 */
	SetParent(this: Instance, newParent: Instance): void;
}

interface InstanceValue extends ValueBase {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_InstanceValue: unique symbol;
	/**
	 * The value of this object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/InstanceValue#Value)
	 */
	Value: Instance;
}

interface IntValue extends ValueBase {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_IntValue: unique symbol;
	/**
	 * The value of this object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/IntValue#Value)
	 */
	Value: number;
}

interface Inventory extends HiddenBase {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Inventory: unique symbol;
}

interface IOService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_IOService: unique symbol;
	/**
	 * Read the buffer file from path
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/IOService#ReadBytesFromPath)
	 */
	ReadBytesFromPath(this: IOService, path: string): any;
	/**
	 * Read the text file data from path
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/IOService#ReadTextFromPath)
	 */
	ReadTextFromPath(this: IOService, path: string): string;
	/**
	 * Write buffer data to file in the project
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/IOService#WriteBytesToPath)
	 */
	WriteBytesToPath(this: IOService, path: string, bytes: any): void;
	/**
	 * Write the text file data to path
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/IOService#WriteTextToPath)
	 */
	WriteTextToPath(this: IOService, path: string, txt: string): void;
	/**
	 * List all files in the project
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/IOService#ListProjectFiles)
	 */
	ListProjectFiles(this: IOService): Array<string>;
	/**
	 * Read the file data from linked ID
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/IOService#ReadBytesFromID)
	 */
	ReadBytesFromID(this: IOService, id: string): any;
	/**
	 * Get the file path from linked ID
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/IOService#GetPathFromID)
	 */
	GetPathFromID(this: IOService, indexID: string): string;
}

interface Light extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Light: unique symbol;
	/**
	 * Sets the color of the light.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Light#Color)
	 */
	Color: Color;
	/**
	 * Sets the brightness of the light.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Light#Brightness)
	 */
	Brightness: number;
	/**
	 * Sets the specular intensity of the light.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Light#Specular)
	 */
	Specular: number;
	/**
	 * Enables or disables shadows cast by the light.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Light#Shadows)
	 */
	Shadows: boolean;
}

interface Lighting extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Lighting: unique symbol;
	/**
	 * Sets the skybox to one of the preset skyboxes.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Lighting#Skybox)
	 */
	Skybox: Enums["Skybox"];
	/**
	 * Determines the source of ambient lighting in the place.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Lighting#AmbientSource)
	 */
	AmbientSource: Enums["AmbientSource"];
	/**
	 * Sets the ambient color of the lighting in the place.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Lighting#AmbientColor)
	 */
	AmbientColor: Color;
	/**
	 * Enables or disables fog in the place.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Lighting#FogEnabled)
	 */
	FogEnabled: boolean;
	/**
	 * Sets the color of the fog in the place.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Lighting#FogColor)
	 */
	FogColor: Color;
	/**
	 * Sets the distance from the camera at which fog begins to appear.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Lighting#FogStartDistance)
	 */
	FogStartDistance: number;
	/**
	 * Sets the distance from the camera at which fog stops appearing.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Lighting#FogEndDistance)
	 */
	FogEndDistance: number;
}

interface LightingModifier extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_LightingModifier: unique symbol;
}

interface Marker3D extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Marker3D: unique symbol;
	/**
	 * Length of this Marker
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Marker3D#Length)
	 */
	Length: number;
	/**
	 * Determine if this marker should appear on top of everything else in 3D
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Marker3D#AppearOnTop)
	 */
	AppearOnTop: boolean;
}

interface Mesh extends Entity {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Mesh: unique symbol;
	/**
	 * Fires when this mesh has been loaded.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#Loaded)
	 */
	readonly Loaded: Event<() => void>;
	/**
	 * The mesh asset used by this Mesh.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#Asset)
	 */
	Asset: MeshAsset;
	/**
	 * Whether to keep the offset of the mesh or recenter it.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#IncludeOffset)
	 */
	IncludeOffset: boolean;
	/**
	 * The type of collision shape to apply to the mesh.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#CollisionType)
	 */
	CollisionType: Enums["CollisionType"];
	/**
	 * Whether to play the mesh's animation automatically when the mesh is loaded.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#PlayAnimationOnStart)
	 */
	PlayAnimationOnStart: boolean;
	/**
	 * Whether to use the color of the part this mesh is attached to.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#UsePartColor)
	 */
	UsePartColor: boolean;
	/**
	 * The color of the mesh.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#Color)
	 */
	Color: Color;
	/**
	 * Whether the mesh casts shadows.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#CastShadows)
	 */
	CastShadows: boolean;
	/**
	 * Indicates the name of the current animation playing on the mesh.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#CurrentAnimation)
	 */
	readonly CurrentAnimation: string;
	/**
	 * Indicates whether an animation is currently playing on the mesh.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#IsAnimationPlaying)
	 */
	readonly IsAnimationPlaying: boolean;
	/**
	 * Indicates whether this mesh is currently being loaded.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#Loading)
	 */
	readonly Loading: boolean;
	/**
	 * Plays the specified animation on the mesh.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#PlayAnimation)
	 */
	PlayAnimation(this: Mesh, animationName: string, speed: number | undefined, loop: boolean | undefined): void;
	/**
	 * Stops the specified animation on the mesh.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#StopAnimation)
	 */
	StopAnimation(this: Mesh, animationName: string | undefined): void;
	/**
	 * Gets a list of all animations available on the mesh.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#GetAnimations)
	 */
	GetAnimations(this: Mesh): Array<string>;
	/**
	 * Get the animation info
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Mesh#GetAnimationInfo)
	 */
	GetAnimationInfo(this: Mesh): Array<MeshAnimationInfo>;
}

interface MeshAnimationInfo {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_MeshAnimationInfo: unique symbol;
	/**
	 * The name of this animation.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/MeshAnimationInfo#Name)
	 */
	Name: string;
	/**
	 * The length of this animation.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/MeshAnimationInfo#Length)
	 */
	Length: number;
	/**
	 * Indicates the playing state of this animation.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/MeshAnimationInfo#IsPlaying)
	 */
	IsPlaying: boolean;
}

interface MeshAsset extends ResourceAsset {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_MeshAsset: unique symbol;
}

interface MissingInstance extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_MissingInstance: unique symbol;
}

interface Model extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Model: unique symbol;
}

interface ModuleScript extends Script {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ModuleScript: unique symbol;
}

interface NetMessage {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_NetMessage: unique symbol;
	/**
	 * Adds a string value to the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#AddString)
	 */
	AddString(this: NetMessage, key: string, value: string): void;
	/**
	 * Adds an integer value to the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#AddInt)
	 */
	AddInt(this: NetMessage, key: string, value: number): void;
	/**
	 * Adds a boolean value to the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#AddBool)
	 */
	AddBool(this: NetMessage, key: string, value: boolean): void;
	/**
	 * Adds a number value to the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#AddNumber)
	 */
	AddNumber(this: NetMessage, key: string, value: number): void;
	/**
	 * Adds a Vector2 value to the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#AddVector2)
	 */
	AddVector2(this: NetMessage, key: string, value: Vector2): void;
	/**
	 * Adds a Vector3 value to the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#AddVector3)
	 */
	AddVector3(this: NetMessage, key: string, value: Vector3): void;
	/**
	 * Adds a Color value to the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#AddColor)
	 */
	AddColor(this: NetMessage, key: string, value: Color): void;
	/**
	 * Adds an Instance value to the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#AddInstance)
	 */
	AddInstance(this: NetMessage, key: string, value: Instance): void;
	/**
	 * Adds an Buffer value to the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#AddBuffer)
	 */
	AddBuffer(this: NetMessage, key: string, buffer: any): void;
	/**
	 * Gets a string value from the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#GetString)
	 */
	GetString(this: NetMessage, key: string): string;
	/**
	 * Gets an integer value from the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#GetInt)
	 */
	GetInt(this: NetMessage, key: string): number;
	/**
	 * Gets a number value from the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#GetNumber)
	 */
	GetNumber(this: NetMessage, key: string): number;
	/**
	 * Gets a boolean value from the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#GetBool)
	 */
	GetBool(this: NetMessage, key: string): boolean;
	/**
	 * Gets a Vector2 value from the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#GetVector2)
	 */
	GetVector2(this: NetMessage, key: string): Vector2;
	/**
	 * Gets a Vector3 value from the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#GetVector3)
	 */
	GetVector3(this: NetMessage, key: string): Vector3;
	/**
	 * Gets a Color value from the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#GetColor)
	 */
	GetColor(this: NetMessage, key: string): Color;
	/**
	 * Gets an Instance value from the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#GetInstance)
	 */
	GetInstance(this: NetMessage, key: string): Instance;
	/**
	 * Gets an Buffer value from the message with the specified key.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#GetBuffer)
	 */
	GetBuffer(this: NetMessage, key: string): any;
	/**
	 * Creates a new NetMessage instance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetMessage#New)
	 */
	New(this: NetMessage): NetMessage;
}

interface NetworkedObject {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_NetworkedObject: unique symbol;
	/**
	 * Fires when a property of this object has changed
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#PropertyChanged)
	 */
	readonly PropertyChanged: Event<(propertyName: string) => void>;
	/**
	 * Fires when this object has been renamed
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#Renamed)
	 */
	readonly Renamed: Event<() => void>;
	/**
	 * Fires when object enters the tree
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#TreeEntered)
	 */
	readonly TreeEntered: Event<() => void>;
	/**
	 * Fires when object exit the tree (via reparent or delete)
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#TreeExited)
	 */
	readonly TreeExited: Event<() => void>;
	/**
	 * Name of this object
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#Name)
	 */
	Name: string;
	/**
	 * Class name of this object
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#ClassName)
	 */
	readonly ClassName: string;
	/**
	 * A shared table accessible by scripts.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#Shared)
	 */
	readonly Shared: ScriptSharedTable;
	/**
	 * Returns networked ID of this object. Networked ID are always unique per network session.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#NetworkedObjectID)
	 */
	readonly NetworkedObjectID: string;
	/**
	 * Returns object ID of this object. Object ID originates from the .poly file.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#ObjectID)
	 */
	readonly ObjectID: string;
	/**
	 * Returns true if this object exists in network, false if this object is spawned by the local client.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#ExistInNetwork)
	 */
	readonly ExistInNetwork: boolean;
	/**
	 * Returns whether or not the instance is the specified class, this also checks for inheritance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#IsA)
	 */
	IsA(this: NetworkedObject, className: string): boolean;
	/**
	 * Clones the instance
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#Clone)
	 */
	Clone(this: NetworkedObject, parent: NetworkedObject | undefined): NetworkedObject;
	/**
	 * Destroys the instance (same as Delete method)
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#Destroy)
	 */
	Destroy(this: NetworkedObject, time: number | undefined): void;
	/**
	 * Deletes the instance (same as Destroy method)
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkedObject#Delete)
	 */
	Delete(this: NetworkedObject, time: number | undefined): void;
}

interface NetworkEvent extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_NetworkEvent: unique symbol;
	/**
	 * Fires when server receives message from client
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkEvent#InvokedServer)
	 */
	readonly InvokedServer: Event<(sender: Player, msg: NetMessage) => void>;
	/**
	 * Fires when client receives message from server
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkEvent#InvokedClient)
	 */
	readonly InvokedClient: Event<(msg: NetMessage) => void>;
	/**
	 * Determines if this network event should send messages reliably. Recommended to be off if you're passing lot of data that doesn't need to arrive reliably.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkEvent#Reliable)
	 */
	Reliable: boolean;
	/**
	 * Sends a message to the server.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkEvent#InvokeServer)
	 */
	InvokeServer(this: NetworkEvent, msg: NetMessage | undefined, _: any | undefined): void;
	/**
	 * Sends a message to a specific client.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkEvent#InvokeClient)
	 */
	InvokeClient(this: NetworkEvent, msg: NetMessage | undefined, player: Player | undefined): void;
	/**
	 * Sends a message to all connected clients.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NetworkEvent#InvokeClients)
	 */
	InvokeClients(this: NetworkEvent, msg: NetMessage | undefined): void;
}

interface NewServerRequestData {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_NewServerRequestData: unique symbol;
	/**
	 * Target place path.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NewServerRequestData#PlacePath)
	 */
	PlacePath: string;
	/**
	 * How much player slot should the new server allocates for.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NewServerRequestData#MaxPlayers)
	 */
	MaxPlayers: number;
	/**
	 * Creates a new `NewServerRequestData`
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NewServerRequestData#New)
	 */
	New(this: NewServerRequestData): NewServerRequestData;
}

interface NPC extends Physical {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_NPC: unique symbol;
	/**
	 * Triggered when the NPC dies.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#Died)
	 */
	readonly Died: Event<() => void>;
	/**
	 * Triggered when the NPC lands on the ground after a jump or fall.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#Landed)
	 */
	readonly Landed: Event<() => void>;
	/**
	 * Triggered when the NPC finishes navigating to a destination.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#NavFinished)
	 */
	readonly NavFinished: Event<() => void>;
	/**
	 * The offset to the seat at which the NPC is positioned when sitting.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#SeatOffset)
	 */
	SeatOffset: Vector3;
	/**
	 * The current health of the NPC.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#Health)
	 */
	Health: number;
	/**
	 * The maximum health of the NPC.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#MaxHealth)
	 */
	MaxHealth: number;
	/**
	 * Determines the jump power of the NPC.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#JumpPower)
	 */
	JumpPower: number;
	/**
	 * Determines the walking speed of the NPC.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#WalkSpeed)
	 */
	WalkSpeed: number;
	/**
	 * Determines whether the NPC uses a nametag.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#UseNametag)
	 */
	UseNametag: boolean;
	/**
	 * Determines the offset position of the NPC's nametag.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#NametagOffset)
	 */
	NametagOffset: Vector3;
	/**
	 * Determines the visibility radius of the NPC's nametag.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#NametagVisibleRadius)
	 */
	NametagVisibleRadius: number;
	/**
	 * Determines the display name of the NPC.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#DisplayName)
	 */
	DisplayName: string;
	/**
	 * Determines the sound played when the NPC jumps.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#JumpSound)
	 */
	JumpSound: Sound;
	/**
	 * Indicates whether the NPC is currently sitting.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#IsSitting)
	 */
	readonly IsSitting: boolean;
	/**
	 * Indicates whether the NPC is currently dead.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#IsDead)
	 */
	readonly IsDead: boolean;
	/**
	 * Indicates the tool currently held by the NPC.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#HoldingTool)
	 */
	readonly HoldingTool: Tool;
	/**
	 * Indicates the seat in which the NPC is currently sitting.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#SittingIn)
	 */
	readonly SittingIn: Seat;
	/**
	 * The character model associated with the NPC.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#Character)
	 */
	readonly Character: CharacterModel;
	/**
	 * Determines the instance the NPC should walk towards.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#MoveTarget)
	 */
	MoveTarget: Dynamic;
	/**
	 * Indicates whether the NPC is currently on the ground.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#OnGround)
	 */
	readonly OnGround: boolean;
	/**
	 * Indicates whether the NPC is currently on the ceiling.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#OnCeiling)
	 */
	readonly OnCeiling: boolean;
	/**
	 * Indicates the distance to the navigation destination.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#NavDestinationDistance)
	 */
	readonly NavDestinationDistance: number;
	/**
	 * Indicates whether the NPC has reached its navigation destination.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#NavDestinationReached)
	 */
	readonly NavDestinationReached: boolean;
	/**
	 * Indicates whether the navigation destination is valid.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#NavDestinationValid)
	 */
	readonly NavDestinationValid: boolean;
	/**
	 * Kills the NPC.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#Kill)
	 */
	Kill(this: NPC): void;
	/**
	 * Makes the NPC jump.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#Jump)
	 */
	Jump(this: NPC): void;
	/**
	 * Makes the NPC sit on a specified seat.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#Sit)
	 */
	Sit(this: NPC, seat: Seat): void;
	/**
	 * Unsits the NPC from the current seat.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#Unsit)
	 */
	Unsit(this: NPC, addForce: boolean | undefined): void;
	/**
	 * Equips the NPC with a specified tool.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#EquipTool)
	 */
	EquipTool(this: NPC, tool: Tool): void;
	/**
	 * Unequips the currently equipped tool from the NPC.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#DropTool)
	 */
	DropTool(this: NPC): void;
	/**
	 * Loads the appearance of the NPC based on a user ID.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#LoadAppearance)
	 */
	LoadAppearance(this: NPC, userID: number): void;
	/**
	 * Clears the NPC's current appearance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#ClearAppearance)
	 */
	ClearAppearance(this: NPC): void;
	/**
	 * Determines the position the NPC should walk towards.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#SetNavDestination)
	 */
	SetNavDestination(this: NPC, pos: Vector3): void;
	/**
	 * Respawns the NPC.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#Respawn)
	 */
	Respawn(this: NPC): void;
	/**
	 * Applies damage to the NPC.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#TakeDamage)
	 */
	TakeDamage(this: NPC, dmg: number): void;
	/**
	 * Heals the NPC by a specified amount.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NPC#Heal)
	 */
	Heal(this: NPC, amount: number): void;
}

interface NumberRange {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_NumberRange: unique symbol;
	/**
	 * Determines the minimum value of the range.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NumberRange#Min)
	 */
	Min: number;
	/**
	 * Determines the maximum value of the range.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NumberRange#Max)
	 */
	Max: number;
	/**
	 * Creates a new NumberRange object with the specified minimum and maximum values.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NumberRange#New)
	 */
	New(this: NumberRange, from: number, to: number): NumberRange;
	/**
	 * Linearly interpolates between the minimum and maximum values of the range based on the parameter t, which is typically between 0 and 1.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NumberRange#Lerp)
	 */
	Lerp(this: NumberRange, t: number): number;
}

interface NumberValue extends ValueBase {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_NumberValue: unique symbol;
	/**
	 * The value of this object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/NumberValue#Value)
	 */
	Value: number;
}

interface Part extends Entity {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Part: unique symbol;
	/**
	 * Determines the shape of the part.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Part#Shape)
	 */
	Shape: Enums["Shape"];
	/**
	 * Determines the material of the part.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Part#Material)
	 */
	Material: Enums["PartMaterial"];
	/**
	 * Determines the color of the part.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Part#Color)
	 */
	Color: Color;
	/**
	 * Determines whether the part casts shadows.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Part#CastShadows)
	 */
	CastShadows: boolean;
}

interface Particles extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Particles: unique symbol;
	/**
	 * Determines if particles should be emitting.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#Playing)
	 */
	Playing: boolean;
	/**
	 * The image used for the particles.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#Image)
	 */
	Image: ImageAsset;
	/**
	 * The color gradient used for the particles.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#Color)
	 */
	Color: ColorSeries;
	/**
	 * Determines the lifetime of a particle.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#Lifetime)
	 */
	Lifetime: NumberRange;
	/**
	 * Determines the number of particles emitted.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#Amount)
	 */
	Amount: number;
	/**
	 * Determines the gravity effect applied to the particles.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#Gravity)
	 */
	Gravity: Vector3;
	/**
	 * Determines the velocity direction
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#VelocityDirection)
	 */
	VelocityDirection: Vector3;
	/**
	 * Determines the initial velocity
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#InitialVelocity)
	 */
	InitialVelocity: NumberRange;
	/**
	 * Determines the spread angle of the velocity
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#Spread)
	 */
	Spread: number;
	/**
	 * Determines how flat the spread angle should be
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#Flatness)
	 */
	Flatness: number;
	/**
	 * Determine the initial scale range
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#Scale)
	 */
	Scale: NumberRange;
	/**
	 * Determine the hue variation
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#HueVariation)
	 */
	HueVariation: NumberRange;
	/**
	 * Determines the blend mode of the particle.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#BlendMode)
	 */
	BlendMode: Enums["BlendMode"];
	/**
	 * Determines whether the particles are shaded.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#Shaded)
	 */
	Shaded: boolean;
	/**
	 * Determines the emission shape of this particle
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#EmissionShape)
	 */
	EmissionShape: Enums["ParticleEmissionShape"];
	/**
	 * Determines the emission shape's scale
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#EmissionShapeScale)
	 */
	EmissionShapeScale: Vector3;
	/**
	 * Whether the particles are simulated in world or local space.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#SimulationSpace)
	 */
	SimulationSpace: Enums["ParticleSimulationSpace"];
	/**
	 * Starts playing the particle system.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#Play)
	 */
	Play(this: Particles): void;
	/**
	 * Stops playing the particle system.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#Stop)
	 */
	Stop(this: Particles): void;
	/**
	 * Emits a specified number of particles immediately.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Particles#Emit)
	 */
	Emit(this: Particles, count: number): void;
}

interface Physical extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Physical: unique symbol;
	/**
	 * Fires when this object has collide with other object
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Physical#Touched)
	 */
	readonly Touched: Event<(hit: Physical) => void>;
	/**
	 * Fires when this object has stopped colliding with other object
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Physical#TouchEnded)
	 */
	readonly TouchEnded: Event<(hit: Physical) => void>;
	/**
	 * Fires when cursor is hovered on this object. Only fired locally
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Physical#MouseEnter)
	 */
	readonly MouseEnter: Event<() => void>;
	/**
	 * Fires when cursor leaves this object. Only fired locally
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Physical#MouseExit)
	 */
	readonly MouseExit: Event<() => void>;
	/**
	 * Fires when this object has been clicked by a player
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Physical#Clicked)
	 */
	readonly Clicked: Event<(player: Player) => void>;
	/**
	 * Determines whether this object is affected by physics.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Physical#Anchored)
	 */
	Anchored: boolean;
	/**
	 * Determines whether this object can collide with other objects.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Physical#CanCollide)
	 */
	CanCollide: boolean;
	/**
	 * Determines the linear velocity of this object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Physical#Velocity)
	 */
	Velocity: Vector3;
	/**
	 * Determines the angular velocity of this object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Physical#AngularVelocity)
	 */
	AngularVelocity: Vector3;
	/**
	 * Sets the network authority of this object to the specified player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Physical#SetNetworkAuthority)
	 */
	SetNetworkAuthority(this: Physical, plr: Player): void;
	/**
	 * Get all objects that's currently in contact with this object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Physical#GetTouching)
	 */
	GetTouching(this: Physical): Array<Physical>;
	/**
	 * Moves the part to the specified position while keeping physics in mind.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Physical#MovePosition)
	 */
	MovePosition(this: Physical, position: Vector3): void;
	/**
	 * Rotates the part while keeping physics in mind.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Physical#MoveRotation)
	 */
	MoveRotation(this: Physical, rotation: Vector3): void;
}

interface PhysicalModel extends Physical {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PhysicalModel: unique symbol;
}

interface PlacesService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PlacesService: unique symbol;
	/**
	 * Request a new server with data
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlacesService#NewServerAsync)
	 */
	NewServerAsync(this: PlacesService, placePath: string): string;
	/**
	 * Request a new server with data
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlacesService#NewServerAsync)
	 */
	NewServerAsync(this: PlacesService, data: NewServerRequestData): string;
	/**
	 * Join a player to a public server of the specified place
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlacesService#JoinPlaceAsync)
	 */
	JoinPlaceAsync(this: PlacesService, plr: Player, to: string): void;
	/**
	 * Join a party of player to a public server of the specified place
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlacesService#JoinPlacePartyAsync)
	 */
	JoinPlacePartyAsync(this: PlacesService, plrs: Array<Player>, to: string): void;
	/**
	 * Join a player to a private server of the specified place
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlacesService#JoinPrivateAsync)
	 */
	JoinPrivateAsync(this: PlacesService, plr: Player, accessID: string): void;
	/**
	 * Join a party of player to a private server of the specified place
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlacesService#JoinPrivatePartyAsync)
	 */
	JoinPrivatePartyAsync(this: PlacesService, players: Array<Player>, accessID: string): void;
}

interface Player extends NPC {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Player: unique symbol;
	/**
	 * Fires when this player chats
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#Chatted)
	 */
	readonly Chatted: Event<(message: string) => void>;
	/**
	 * Fires when this player has respawned
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#Respawned)
	 */
	readonly Respawned: Event<() => void>;
	/**
	 * The unique ID of the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#UserID)
	 */
	readonly UserID: number;
	/**
	 * Determines whether the player can move.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#CanMove)
	 */
	CanMove: boolean;
	/**
	 * Determines the sprinting speed of the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#SprintSpeed)
	 */
	SprintSpeed: number;
	/**
	 * Determines the current stamina of the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#Stamina)
	 */
	Stamina: number;
	/**
	 * Determines the maximum stamina of the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#MaxStamina)
	 */
	MaxStamina: number;
	/**
	 * Determines whether the player uses stamina.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#UseStamina)
	 */
	UseStamina: boolean;
	/**
	 * Determines the rate at which the player's stamina regenerates.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#StaminaRegen)
	 */
	StaminaRegen: number;
	/**
	 * Determines the rate at which the player's stamina depletes while sprinting.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#StaminaBurn)
	 */
	StaminaBurn: number;
	/**
	 * Determines the time the player has to wait before respawning.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#RespawnTime)
	 */
	RespawnTime: number;
	/**
	 * Determines whether the player uses head turning.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#UseHeadTurning)
	 */
	UseHeadTurning: boolean;
	/**
	 * Determines whether the player uses bubble chat.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#UseBubbleChat)
	 */
	UseBubbleChat: boolean;
	/**
	 * Determines whether the player's appearance is automatically loaded.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#AutoLoadAppearance)
	 */
	AutoLoadAppearance: boolean;
	/**
	 * The amount of network latency (ping) the player is experiencing.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#NetworkPing)
	 */
	readonly NetworkPing: number;
	/**
	 * Determines whether the player is an administrator.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#IsAdmin)
	 */
	readonly IsAdmin: boolean;
	/**
	 * Determines whether the player is the creator of the game.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#IsCreator)
	 */
	readonly IsCreator: boolean;
	/**
	 * Determines the chat color of the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#ChatColor)
	 */
	ChatColor: Color;
	/**
	 * Determines whether the player is the local player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#IsLocal)
	 */
	readonly IsLocal: boolean;
	/**
	 * Determines whether the player is currently climbing.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#IsClimbing)
	 */
	readonly IsClimbing: boolean;
	/**
	 * Determines the truss the player is currently climbing.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#ClimbingTruss)
	 */
	readonly ClimbingTruss: Truss;
	/**
	 * Determines the platform the player is using.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#UserPlatform)
	 */
	readonly UserPlatform: Enums["ClientPlatform"];
	/**
	 * The inventory of the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#Inventory)
	 */
	readonly Inventory: Inventory;
	/**
	 * Makes the player jump.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#Jump)
	 */
	Jump(this: Player): void;
	/**
	 * Kicks the player from the game with the specified reason.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#Kick)
	 */
	Kick(this: Player, reason: string): void;
	/**
	 * Unequips the currently equipped tool of the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#UnequipTool)
	 */
	UnequipTool(this: Player): void;
	/**
	 * Respawns the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#Respawn)
	 */
	Respawn(this: Player): void;
	/**
	 * Resets the player's appearance to the default.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Player#ResetAppearance)
	 */
	ResetAppearance(this: Player): void;
}

interface PlayerDefaults extends HiddenBase {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PlayerDefaults: unique symbol;
	/**
	 * The default maximum health of the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#MaxHealth)
	 */
	MaxHealth: number;
	/**
	 * The default walking speed of the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#WalkSpeed)
	 */
	WalkSpeed: number;
	/**
	 * The default sprinting speed of the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#SprintSpeed)
	 */
	SprintSpeed: number;
	/**
	 * The default jump power of the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#JumpPower)
	 */
	JumpPower: number;
	/**
	 * The default time the player has to wait before respawning.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#RespawnTime)
	 */
	RespawnTime: number;
	/**
	 * The default chat color of the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#ChatColor)
	 */
	ChatColor: Color;
	/**
	 * Determines whether the player can move by default.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#CanMove)
	 */
	CanMove: boolean;
	/**
	 * The rate at which the player's stamina depletes while sprinting.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#StaminaBurn)
	 */
	StaminaBurn: number;
	/**
	 * Determines whether the player uses stamina.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#UseStamina)
	 */
	UseStamina: boolean;
	/**
	 * Legacy value for stamina.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#StaminaEnabled)
	 */
	StaminaEnabled: boolean;
	/**
	 * Determines the default stamina of players.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#Stamina)
	 */
	Stamina: number;
	/**
	 * Determines the default maximum stamina of players.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#MaxStamina)
	 */
	MaxStamina: number;
	/**
	 * Determines the rate at which the player's stamina regenerates.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#StaminaRegen)
	 */
	StaminaRegen: number;
	/**
	 * Determines whether the player uses head turning by default.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#UseHeadTurning)
	 */
	UseHeadTurning: boolean;
	/**
	 * Determines whether the player uses bubble chat by default.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#UseBubbleChat)
	 */
	UseBubbleChat: boolean;
	/**
	 * Determines whether the player's appearance is automatically loaded by default.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#AutoLoadAppearance)
	 */
	AutoLoadAppearance: boolean;
	/**
	 * Resets the specified player back to their default values.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PlayerDefaults#LoadDefaults)
	 */
	LoadDefaults(this: PlayerDefaults): void;
}

interface PlayerGUI extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PlayerGUI: unique symbol;
}

interface Players extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Players: unique symbol;
	/**
	 * Fires when player has connected
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Players#PlayerAdded)
	 */
	readonly PlayerAdded: Event<(player: Player) => void>;
	/**
	 * Fires when player has disconnected
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Players#PlayerRemoved)
	 */
	readonly PlayerRemoved: Event<(player: Player) => void>;
	/**
	 * The player who is currently playing the game.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Players#LocalPlayer)
	 */
	readonly LocalPlayer: Player;
	/**
	 * Determines whether or not collisions between players are enabled.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Players#PlayerCollisionEnabled)
	 */
	PlayerCollisionEnabled: boolean;
	/**
	 * The number of players currently in the game.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Players#PlayersCount)
	 */
	readonly PlayersCount: number;
	/**
	 * Returns a table containing all the players currently in the game.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Players#GetPlayers)
	 */
	GetPlayers(this: Players): Array<Player>;
	/**
	 * Returns the player with the specified username.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Players#GetPlayer)
	 */
	GetPlayer(this: Players, username: string): Player;
	/**
	 * Returns the player with the specified user ID.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Players#GetPlayerByID)
	 */
	GetPlayerByID(this: Players, userID: number): Player;
}

interface PointLight extends Light {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PointLight: unique symbol;
	/**
	 * The range of the point light's illumination.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PointLight#Range)
	 */
	Range: number;
}

interface PolytorianModel extends CharacterModel {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PolytorianModel: unique symbol;
	/**
	 * Fires when ragdoll has been started
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#RagdollStarted)
	 */
	readonly RagdollStarted: Event<() => void>;
	/**
	 * Fires when ragdoll has been stopped
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#RagdollStopped)
	 */
	readonly RagdollStopped: Event<() => void>;
	/**
	 * The head color
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#HeadColor)
	 */
	HeadColor: Color;
	/**
	 * The torso color
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#TorsoColor)
	 */
	TorsoColor: Color;
	/**
	 * The left arm color
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#LeftArmColor)
	 */
	LeftArmColor: Color;
	/**
	 * The right arm color
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#RightArmColor)
	 */
	RightArmColor: Color;
	/**
	 * The left leg color
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#LeftLegColor)
	 */
	LeftLegColor: Color;
	/**
	 * The right leg color
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#RightLegColor)
	 */
	RightLegColor: Color;
	/**
	 * The face image to use
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#FaceImage)
	 */
	FaceImage: ImageAsset;
	/**
	 * The shirt image to use
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#ShirtImage)
	 */
	ShirtImage: ImageAsset;
	/**
	 * The pants image to use
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#PantsImage)
	 */
	PantsImage: ImageAsset;
	/**
	 * The torso mesh to use
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#TorsoMesh)
	 */
	TorsoMesh: MeshAsset;
	/**
	 * Returns true if this character is ragdolling
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#Ragdolling)
	 */
	readonly Ragdolling: boolean;
	/**
	 * Returns the current global ragdoll position, if ragdoll haven't starts yet. Returns `Vector3.Zero`
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#RagdollPosition)
	 */
	readonly RagdollPosition: Vector3;
	/**
	 * Returns the current global ragdoll rotation, if ragdoll haven't starts yet. Returns `Vector3.Zero`
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#RagdollRotation)
	 */
	readonly RagdollRotation: Vector3;
	/**
	 * Start ragdoll
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#StartRagdoll)
	 */
	StartRagdoll(this: PolytorianModel, force: Vector3 | undefined): void;
	/**
	 * Stop ragdoll
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#StopRagdoll)
	 */
	StopRagdoll(this: PolytorianModel): void;
	/**
	 * Get an attachment from this character.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#GetAttachment)
	 */
	GetAttachment(this: PolytorianModel, attachmentEnum: Enums["CharacterAttachment"]): Dynamic;
	/**
	 * Load an appearance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#LoadAppearance)
	 */
	LoadAppearance(this: PolytorianModel, userID: number, loadTool: boolean | undefined): void;
	/**
	 * Clear current appearance.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#ClearAppearance)
	 */
	ClearAppearance(this: PolytorianModel): void;
	/**
	 * EXPERIMENTAL !! Set bone override mode
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#SetBoneOverrideTo)
	 */
	SetBoneOverrideTo(this: PolytorianModel, attachment: Enums["CharacterAttachment"], to: boolean): void;
	/**
	 * EXPERIMENTAL !! Set animation override, if set to true. will disable the character animation entirely
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#SetAnimationOverrideTo)
	 */
	SetAnimationOverrideTo(this: PolytorianModel, to: boolean): void;
	/**
	 * EXPERIMENTAL !! Set bone override position
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#SetBoneOverridePosition)
	 */
	SetBoneOverridePosition(this: PolytorianModel, attachment: Enums["CharacterAttachment"], pos: Vector3): void;
	/**
	 * EXPERIMENTAL !! Set bone override rotation
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#SetBoneOverrideRotation)
	 */
	SetBoneOverrideRotation(this: PolytorianModel, attachment: Enums["CharacterAttachment"], euler: Vector3): void;
	/**
	 * EXPERIMENTAL !! Get bone override position
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#GetBoneOverridePosition)
	 */
	GetBoneOverridePosition(this: PolytorianModel, attachment: Enums["CharacterAttachment"]): Vector3;
	/**
	 * EXPERIMENTAL !! Get bone override rotation
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PolytorianModel#GetBoneOverrideRotation)
	 */
	GetBoneOverrideRotation(this: PolytorianModel, attachment: Enums["CharacterAttachment"]): Vector3;
}

interface PreferencesService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PreferencesService: unique symbol;
	/**
	 * Fired when a user preference setting is changed.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PreferencesService#SettingChanged)
	 */
	readonly SettingChanged: Event<(settingName: string, setTo: any) => void>;
	/**
	 * Determines whether the player has photo mode enabled.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PreferencesService#UsePhotoMode)
	 */
	readonly UsePhotoMode: boolean;
	/**
	 * Determines whether the player has post-processing effects enabled.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PreferencesService#UsePostProcessing)
	 */
	readonly UsePostProcessing: boolean;
}

interface PresenceService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PresenceService: unique symbol;
	/**
	 * Current activity status.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PresenceService#State)
	 */
	State: string;
	/**
	 * Activity cover image.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PresenceService#CoverImage)
	 */
	CoverImage: PTImageAsset;
	/**
	 * Reset the running timer for this activity.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PresenceService#ResetTimer)
	 */
	ResetTimer(this: PresenceService): void;
}

interface ProceduralSky extends Sky {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ProceduralSky: unique symbol;
	/**
	 * The size of the sun in the sky.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ProceduralSky#SunSize)
	 */
	SunSize: number;
	/**
	 * The tint color of the sky.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ProceduralSky#SkyTint)
	 */
	SkyTint: Color;
	/**
	 * The color of the horizon in the sky.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ProceduralSky#HorizonColor)
	 */
	HorizonColor: Color;
	/**
	 * The color of the ground in the sky.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ProceduralSky#GroundColor)
	 */
	GroundColor: Color;
	/**
	 * The exposure level of the sky.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ProceduralSky#Exposure)
	 */
	Exposure: number;
}

interface PTAudioAsset extends AudioAsset {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PTAudioAsset: unique symbol;
	/**
	 * The audio ID to load
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PTAudioAsset#AudioID)
	 */
	AudioID: number;
}

interface PTCallback {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PTCallback: unique symbol;
}

interface PTFunction {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PTFunction: unique symbol;
}

interface PTImageAsset extends ImageAsset {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PTImageAsset: unique symbol;
	/**
	 * Asset ID of this image
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PTImageAsset#ImageID)
	 */
	ImageID: number;
	/**
	 * Image type of this image
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PTImageAsset#ImageType)
	 */
	ImageType: Enums["ImageType"];
}

interface PTMeshAsset extends MeshAsset {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PTMeshAsset: unique symbol;
	/**
	 * Asset ID of this mesh
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PTMeshAsset#AssetID)
	 */
	AssetID: number;
}

interface PTSignal {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PTSignal: unique symbol;
	/**
	 * Connect a function to this signal
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PTSignal#Connect)
	 */
	Connect(this: PTSignal, action: any): void;
	/**
	 * Disconnect a function from this signal
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PTSignal#Disconnect)
	 */
	Disconnect(this: PTSignal, action: any): void;
	/**
	 * Wait until this signal's emitted
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PTSignal#Wait)
	 */
	Wait(this: PTSignal): any;
	/**
	 * Listen to this signal only once
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PTSignal#Once)
	 */
	Once(this: PTSignal, action: any): void;
}

interface PurchasesService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PurchasesService: unique symbol;
	/**
	 * Prompt the purchase prompt to player
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PurchasesService#PromptAsync)
	 */
	PromptAsync(this: PurchasesService, player: Player, assetID: number): boolean;
	/**
	 * Checks asynchronously if the specified player owns the asset with the given asset ID.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/PurchasesService#OwnsItemAsync)
	 */
	OwnsItemAsync(this: PurchasesService, player: Player, assetID: number): boolean;
}

interface Quaternion {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Quaternion: unique symbol;
	/**
	 * The X component of the quaternion.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#X)
	 */
	X: number;
	/**
	 * The Y component of the quaternion.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#Y)
	 */
	Y: number;
	/**
	 * The Z component of the quaternion.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#Z)
	 */
	Z: number;
	/**
	 * The W component of the quaternion.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#W)
	 */
	W: number;
	/**
	 * The identity rotation.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#Identity)
	 */
	readonly Identity: Quaternion;
	/**
	 * Creates a new Quaternion object with the specified components.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#New)
	 */
	New(this: Quaternion): Quaternion;
	/**
	 * Creates a new Quaternion object with the specified components.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#New)
	 */
	New(this: Quaternion, x: number, y: number, z: number, w: number): Quaternion;
	/**
	 * Calculates the angle between two quaternions.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#Angle)
	 */
	Angle(this: Quaternion, a: Quaternion, b: Quaternion): Quaternion;
	/**
	 * Creates a rotation which rotates angle degrees around axis.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#AngleAxis)
	 */
	AngleAxis(this: Quaternion, angle: number, axis: Vector3): Quaternion;
	/**
	 * Calculates the dot product of two quaternions.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#Dot)
	 */
	Dot(this: Quaternion, a: Quaternion, b: Quaternion): Quaternion;
	/**
	 * Creates a quaternion from Euler angles specified by a Vector3.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#Euler)
	 */
	Euler(this: Quaternion, x: number, y: number, z: number): Quaternion;
	/**
	 * Creates a quaternion from Euler angles specified by a Vector3.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#Euler)
	 */
	Euler(this: Quaternion, euler: Vector3): Quaternion;
	/**
	 * Converts a quaternion to Euler angles represented as a Vector3.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#ToEuler)
	 */
	ToEuler(this: Quaternion, euler: Quaternion): Vector3;
	/**
	 * Creates a rotation which rotates angle degrees around axis.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#FromToRotation)
	 */
	FromToRotation(this: Quaternion, fromDirection: Vector3, toDirection: Vector3): Quaternion;
	/**
	 * Calculates the inverse of a quaternion.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#Inverse)
	 */
	Inverse(this: Quaternion, rotation: Quaternion): Quaternion;
	/**
	 * Linearly interpolates between two quaternions.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#Lerp)
	 */
	Lerp(this: Quaternion, a: Quaternion, b: Quaternion, t: number): Quaternion;
	/**
	 * Linearly interpolates between two quaternions without clamping the interpolant.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#LerpUnclamped)
	 */
	LerpUnclamped(this: Quaternion, a: Quaternion, b: Quaternion, t: number): Quaternion;
	/**
	 * Creates a rotation with the specified forward and upwards directions.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#LookRotation)
	 */
	LookRotation(this: Quaternion, forward: Vector3): Quaternion;
	/**
	 * Creates a rotation with the specified forward and upwards directions.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#LookRotation)
	 */
	LookRotation(this: Quaternion, forward: Vector3, upwards: Vector3): Quaternion;
	/**
	 * Normalizes the given quaternion.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#Normalize)
	 */
	Normalize(this: Quaternion, quaternion: Quaternion): Quaternion;
	/**
	 * Rotates a rotation from towards to by maxDegreesDelta.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#RotateTowards)
	 */
	RotateTowards(this: Quaternion, from: Quaternion, to: Quaternion, maxDegreesDelta: number): Quaternion;
	/**
	 * Spherically interpolates between two quaternions.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#Slerp)
	 */
	Slerp(this: Quaternion, a: Quaternion, b: Quaternion, t: number): Quaternion;
	/**
	 * Spherically interpolates between two quaternions without clamping the interpolant.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Quaternion#SlerpUnclamped)
	 */
	SlerpUnclamped(this: Quaternion, a: Quaternion, b: Quaternion, t: number): Quaternion;
}

interface RayResult {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_RayResult: unique symbol;
	/**
	 * The origin point of the ray.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/RayResult#Origin)
	 */
	Origin: Vector3;
	/**
	 * The direction vector of the ray.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/RayResult#Direction)
	 */
	Direction: Vector3;
	/**
	 * The position where the ray hit an object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/RayResult#Position)
	 */
	Position: Vector3;
	/**
	 * The surface normal at the point where the ray hit.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/RayResult#Normal)
	 */
	Normal: Vector3;
	/**
	 * The distance from the ray's origin to the hit point.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/RayResult#Distance)
	 */
	Distance: number;
	/**
	 * The instance that was hit by the ray.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/RayResult#Instance)
	 */
	Instance: Instance;
}

interface ResourceAsset extends BaseAsset {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ResourceAsset: unique symbol;
}

interface Script extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Script: unique symbol;
	/**
	 * The source code of the script as a string.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Script#Source)
	 */
	Source: string;
	/**
	 * Determine if this script should be enabled. Note that setting it to false during runtime won't stop the script immediately, rather it would stop any running threads when it hits any yield function.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Script#IsEnabled)
	 */
	IsEnabled: boolean;
	/**
	 * A linked script asset associated with this script.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Script#LinkedScript)
	 */
	LinkedScript: FileLinkAsset;
	/**
	 * Indicates whether the script is running in compatibility mode.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Script#Compatibility)
	 */
	Compatibility: boolean;
	/**
	 * Calls a function in the script with the given arguments.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Script#Call)
	 */
	Call(this: Script, funcName: string, args: any): void;
	/**
	 * Calls a function in the script asynchronously with the given arguments.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Script#CallAsync)
	 */
	CallAsync(this: Script, funcName: string, args: any): void;
	/**
	 * Link script with the target file path
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Script#LinkWithScriptFile)
	 */
	LinkWithScriptFile(this: Script, scriptPath: string): void;
}

interface ScriptService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ScriptService: unique symbol;
}

interface ScriptSharedTable {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ScriptSharedTable: unique symbol;
	/**
	 * Clear the shared table
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ScriptSharedTable#Clear)
	 */
	Clear(this: ScriptSharedTable): void;
	/**
	 * Remove the key from shared table
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ScriptSharedTable#Remove)
	 */
	Remove(this: ScriptSharedTable, key: string): void;
	/**
	 * Clear all keys with the prefix
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ScriptSharedTable#ClearPrefix)
	 */
	ClearPrefix(this: ScriptSharedTable, prefix: string): void;
	/**
	 * Clear all keys with the suffix
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ScriptSharedTable#ClearSuffix)
	 */
	ClearSuffix(this: ScriptSharedTable, suffix: string): void;
}

interface Seat extends Part {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Seat: unique symbol;
	/**
	 * Fires when an occupant sits on the seat.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Seat#Sat)
	 */
	readonly Sat: Event<(occupant: NPC) => void>;
	/**
	 * Fires when an occupant leaves the seat.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Seat#Vacated)
	 */
	readonly Vacated: Event<(occupant: NPC) => void>;
	/**
	 * Indicates who is currently occupying the seat.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Seat#Occupant)
	 */
	Occupant: NPC;
	/**
	 * Determines whether NPCs are allowed to sit on this seat or only players.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Seat#CanNPCSit)
	 */
	CanNPCSit: boolean;
}

interface ServerHidden extends HiddenBase {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ServerHidden: unique symbol;
}

interface ServerScript extends Script {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ServerScript: unique symbol;
}

interface Sky extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Sky: unique symbol;
}

interface SocialService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_SocialService: unique symbol;
}

interface Sound extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Sound: unique symbol;
	/**
	 * Fires when this sound has loaded
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Loaded)
	 */
	readonly Loaded: Event<() => void>;
	/**
	 * The audio asset to be played by the sound.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Audio)
	 */
	Audio: AudioAsset;
	/**
	 * The volume level of the sound.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Volume)
	 */
	Volume: number;
	/**
	 * The pitch level of the sound.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Pitch)
	 */
	Pitch: number;
	/**
	 * Determines whether the sound should start playing automatically when loaded.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Autoplay)
	 */
	Autoplay: boolean;
	/**
	 * Determines whether the sound should loop when it reaches the end.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Loop)
	 */
	Loop: boolean;
	/**
	 * Determines whether the sound should be played in the 3D world space.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#PlayInWorld)
	 */
	PlayInWorld: boolean;
	/**
	 * Determines whether the sound should be paused
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Paused)
	 */
	Paused: boolean;
	/**
	 * The maximum distance at which the sound can be heard.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#MaxDistance)
	 */
	MaxDistance: number;
	/**
	 * Indicates the current playback position of the sound in seconds.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Time)
	 */
	Time: number;
	/**
	 * Indicates whether the sound is currently playing.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Playing)
	 */
	readonly Playing: boolean;
	/**
	 * Indicates whether the sound is currently loading.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Loading)
	 */
	readonly Loading: boolean;
	/**
	 * The total length of the sound in seconds.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Length)
	 */
	readonly Length: number;
	/**
	 * Starts playing the sound.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Play)
	 */
	Play(this: Sound): void;
	/**
	 * Plays the sound once at the specified volume without affecting the current playback.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#PlayOneShot)
	 */
	PlayOneShot(this: Sound, volume: number | undefined): void;
	/**
	 * Pause the sound if it is currently playing.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Pause)
	 */
	Pause(this: Sound): void;
	/**
	 * Stops the sound if it is currently playing.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Sound#Stop)
	 */
	Stop(this: Sound): void;
}

interface SpotLight extends Light {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_SpotLight: unique symbol;
	/**
	 * The maximum distance the light can reach.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/SpotLight#Range)
	 */
	Range: number;
	/**
	 * The angle of the spotlight's cone.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/SpotLight#Angle)
	 */
	Angle: number;
}

interface StringValue extends ValueBase {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_StringValue: unique symbol;
	/**
	 * The value of this object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/StringValue#Value)
	 */
	Value: string;
}

interface SunLight extends Light {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_SunLight: unique symbol;
}

interface Temporary extends ServerHidden {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Temporary: unique symbol;
}

interface Text3D extends Dynamic {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Text3D: unique symbol;
	/**
	 * The text content displayed.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Text3D#Text)
	 */
	Text: string;
	/**
	 * The size of the font used for the text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Text3D#FontSize)
	 */
	FontSize: number;
	/**
	 * The color of the text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Text3D#Color)
	 */
	Color: Color;
	/**
	 * The width of the text outline.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Text3D#OutlineWidth)
	 */
	OutlineWidth: number;
	/**
	 * The color of the text outline.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Text3D#OutlineColor)
	 */
	OutlineColor: Color;
	/**
	 * Determines whether the text should always be facing the camera.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Text3D#FaceCamera)
	 */
	FaceCamera: boolean;
	/**
	 * Determines the horizontal alignment of the text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Text3D#HorizontalAlignment)
	 */
	HorizontalAlignment: Enums["TextHorizontalAlignment"];
	/**
	 * Determines the vertical alignment of the text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Text3D#VerticalAlignment)
	 */
	VerticalAlignment: Enums["TextVerticalAlignment"];
	/**
	 * The font asset used for the text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Text3D#FontAsset)
	 */
	FontAsset: FontAsset;
	/**
	 * Determines whether the text should be parsed as rich text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Text3D#UseRichText)
	 */
	UseRichText: boolean;
}

interface Tool extends PhysicalModel {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Tool: unique symbol;
	/**
	 * Fires when this tool has been equipped
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Tool#Equipped)
	 */
	readonly Equipped: Event<() => void>;
	/**
	 * Fires when this tool has been unequipped
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Tool#Unequipped)
	 */
	readonly Unequipped: Event<() => void>;
	/**
	 * Fires when this tool has been activated (via mouse press or `Tool:Activate`)
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Tool#Activated)
	 */
	readonly Activated: Event<() => void>;
	/**
	 * Fires when this tool has been deactivated (via mouse release or `Tool:Deactivate`)
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Tool#Deactivated)
	 */
	readonly Deactivated: Event<() => void>;
	/**
	 * Determines whether the tool can be dropped by the player.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Tool#Droppable)
	 */
	Droppable: boolean;
	/**
	 * The icon for this tool, appears in inventory.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Tool#IconImage)
	 */
	IconImage: ImageAsset;
	/**
	 * Determines who is currently holding this tool.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Tool#Holder)
	 */
	Holder: NPC;
	/**
	 * Activates the tool, similarly to pressing the mouse button.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Tool#Activate)
	 */
	Activate(this: Tool): void;
	/**
	 * Deactivates the tool, similarly to releasing the mouse button.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Tool#Deactivate)
	 */
	Deactivate(this: Tool): void;
	/**
	 * Plays the specified animation on the holder of the tool.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Tool#PlayAnimation)
	 */
	PlayAnimation(this: Tool, animationName: string): void;
}

interface Truss extends Part {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Truss: unique symbol;
	/**
	 * The speed at which the player can climb the truss.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Truss#ClimbSpeed)
	 */
	ClimbSpeed: number;
}

interface TweenObject {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_TweenObject: unique symbol;
	/**
	 * Fires when this tween has finished
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#Finished)
	 */
	readonly Finished: Event<() => void>;
	/**
	 * Fires when this tween has been canceled
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#Canceled)
	 */
	readonly Canceled: Event<() => void>;
	/**
	 * Determines if this tween is looped
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#Looped)
	 */
	Looped: boolean;
	/**
	 * Determines if this tween will run all the tweens in parallel
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#Parallel)
	 */
	Parallel: boolean;
	/**
	 * Determines the speed scale of this tween
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#SpeedScale)
	 */
	SpeedScale: number;
	/**
	 * Returns whether or not this tween is running
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#IsRunning)
	 */
	readonly IsRunning: boolean;
	/**
	 * Returns the elapsed time of this tween
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#ElapsedTime)
	 */
	readonly ElapsedTime: number;
	/**
	 * Set the direction of this tween. This function returns a `TweenObject` which means you can stack it with other functions.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#SetDirection)
	 */
	SetDirection(this: TweenObject, dir: Enums["TweenDirection"]): TweenObject;
	/**
	 * Set the transition of this tween. This function returns a `TweenObject` which means you can stack it with other functions.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#SetTrans)
	 */
	SetTrans(this: TweenObject, trans: Enums["TweenTransition"]): TweenObject;
	/**
	 * Tweens the position of a Dynamic.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#TweenPosition)
	 */
	TweenPosition(this: TweenObject, target: Dynamic, destination: Vector3, time: number): void;
	/**
	 * Tweens the rotation of a Dynamic.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#TweenRotation)
	 */
	TweenRotation(this: TweenObject, target: Dynamic, destination: Vector3, time: number): void;
	/**
	 * Tweens the size of a Dynamic.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#TweenSize)
	 */
	TweenSize(this: TweenObject, target: Dynamic, destination: Vector3, time: number): void;
	/**
	 * Tweens a color between two specified values.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#TweenColor)
	 */
	TweenColor(this: TweenObject, from: Color, to: Color, time: number, callback: any): void;
	/**
	 * Tweens a number between two specified values.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#TweenNumber)
	 */
	TweenNumber(this: TweenObject, from: number, to: number, time: number, callback: any): void;
	/**
	 * Tweens a Vector2 between two specified values.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#TweenVector2)
	 */
	TweenVector2(this: TweenObject, from: Vector2, to: Vector2, time: number, callback: any): void;
	/**
	 * Tweens a Vector3 between two specified values.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#TweenVector3)
	 */
	TweenVector3(this: TweenObject, from: Vector3, to: Vector3, time: number, callback: any): void;
	/**
	 * Tweens a Quaternion between two specified values.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#TweenQuaternion)
	 */
	TweenQuaternion(this: TweenObject, from: Quaternion, to: Quaternion, time: number, callback: any): void;
	/**
	 * Play this tween
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#Play)
	 */
	Play(this: TweenObject): void;
	/**
	 * Pause this tween
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#Pause)
	 */
	Pause(this: TweenObject): void;
	/**
	 * Stop this tween
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#Stop)
	 */
	Stop(this: TweenObject): void;
	/**
	 * Creates a delay in the tween.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#Interval)
	 */
	Interval(this: TweenObject, sec: number): void;
	/**
	 * Chain a tween if parallel is set to true
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#Chain)
	 */
	Chain(this: TweenObject): TweenObject;
	/**
	 * Cancel this tween
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenObject#Cancel)
	 */
	Cancel(this: TweenObject, callFinsihed: boolean | undefined): void;
}

interface TweenService extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_TweenService: unique symbol;
	/**
	 * Creates a new tween object
    
    Note: Tween will run automatically after one frame, you must use it's function right after creating it.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/TweenService#NewTween)
	 */
	NewTween(this: TweenService): TweenObject;
}

interface UIButton extends UILabel {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UIButton: unique symbol;
	/**
	 * Fires when user click on this button
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIButton#Clicked)
	 */
	readonly Clicked: Event<() => void>;
}

interface UIField extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UIField: unique symbol;
	/**
	 * Fires when user's cursor hovers on this UI
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#MouseEnter)
	 */
	readonly MouseEnter: Event<() => void>;
	/**
	 * Fires when user's cursor leaves this UI
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#MouseExit)
	 */
	readonly MouseExit: Event<() => void>;
	/**
	 * Fires when user hold down mouse on this UI
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#MouseDown)
	 */
	readonly MouseDown: Event<() => void>;
	/**
	 * Fires when user release mouse on this UI
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#MouseUp)
	 */
	readonly MouseUp: Event<() => void>;
	/**
	 * Fires when this UI transform has been changed
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#TransformChanged)
	 */
	readonly TransformChanged: Event<() => void>;
	/**
	 * Fires when this UI visibility has been changed
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#VisibilityChanged)
	 */
	readonly VisibilityChanged: Event<() => void>;
	/**
	 * The offset of the UI element in pixels.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#PositionOffset)
	 */
	PositionOffset: Vector2;
	/**
	 * The position of the UI element relative to its parent.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#PositionRelative)
	 */
	PositionRelative: Vector2;
	/**
	 * The rotation of the UI element in degrees.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#Rotation)
	 */
	Rotation: number;
	/**
	 * The size offset of the UI element in pixels.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#SizeOffset)
	 */
	SizeOffset: Vector2;
	/**
	 * The size of the UI element relative to its parent.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#SizeRelative)
	 */
	SizeRelative: Vector2;
	/**
	 * Determines whether the UI element clips its descendants.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#ClipDescendants)
	 */
	ClipDescendants: boolean;
	/**
	 * The pivot point of the UI element.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#PivotPoint)
	 */
	PivotPoint: Vector2;
	/**
	 * The scale of the UI element.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#Scale)
	 */
	Scale: Vector2;
	/**
	 * Determines whether the UI element is visible.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#Visible)
	 */
	Visible: boolean;
	/**
	 * Determines the mask mode of the UI element.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#MaskMode)
	 */
	MaskMode: Enums["MaskMode"];
	/**
	 * Determines if the UI field should be ignored by mouse input
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#IgnoreMouse)
	 */
	IgnoreMouse: boolean;
	/**
	 * Determines the ZIndex value of this UI field.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#ZIndex)
	 */
	ZIndex: number;
	/**
	 * The absolute position of the UI element in pixels.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#AbsolutePosition)
	 */
	readonly AbsolutePosition: Vector2;
	/**
	 * The absolute size of the UI element in pixels.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#AbsoluteSize)
	 */
	readonly AbsoluteSize: Vector2;
	/**
	 * Indicates whether the UI element is visible in the UI hierarchy.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIField#IsVisibleInTree)
	 */
	readonly IsVisibleInTree: boolean;
}

interface UIHorizontalLayout extends UIHVLayout {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UIHorizontalLayout: unique symbol;
}

interface UIHVLayout extends UIField {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UIHVLayout: unique symbol;
	/**
	 * The spacing between child elements in the layout.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIHVLayout#Spacing)
	 */
	Spacing: number;
	/**
	 * Determines the alignment of child elements within the layout.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIHVLayout#ChildAlignment)
	 */
	ChildAlignment: Enums["UILayoutAlignment"];
}

interface UIImage extends UIField {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UIImage: unique symbol;
	/**
	 * The image asset used for the image.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIImage#Image)
	 */
	Image: ImageAsset;
	/**
	 * The color applied to the image.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIImage#Color)
	 */
	Color: Color;
	/**
	 * Determines how the image is stretched within the view.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIImage#StretchMode)
	 */
	StretchMode: Enums["ImageStretchMode"];
	/**
	 * Indicates whether the image is currently loading.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIImage#Loading)
	 */
	readonly Loading: boolean;
}

interface UILabel extends UIView {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UILabel: unique symbol;
	/**
	 * The text of the label.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UILabel#Text)
	 */
	Text: string;
	/**
	 * The color of the text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UILabel#TextColor)
	 */
	TextColor: Color;
	/**
	 * The width of the text outline.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UILabel#OutlineWidth)
	 */
	OutlineWidth: number;
	/**
	 * The color of the text outline.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UILabel#OutlineColor)
	 */
	OutlineColor: Color;
	/**
	 * Determines the horizontal alignment of the text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UILabel#HorizontalAlignment)
	 */
	HorizontalAlignment: Enums["TextHorizontalAlignment"];
	/**
	 * Determines the vertical alignment of the text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UILabel#VerticalAlignment)
	 */
	VerticalAlignment: Enums["TextVerticalAlignment"];
	/**
	 * The font size of the text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UILabel#FontSize)
	 */
	FontSize: number;
	/**
	 * Determines whether the text uses rich text formatting.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UILabel#UseRichText)
	 */
	UseRichText: boolean;
	/**
	 * The font asset used for the text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UILabel#FontAsset)
	 */
	FontAsset: FontAsset;
}

interface UIScrollView extends UIField {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UIScrollView: unique symbol;
	/**
	 * Determines the horizontal scroll mode of the scroll view.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIScrollView#HorizontalScrollMode)
	 */
	HorizontalScrollMode: Enums["ScrollMode"];
	/**
	 * Determines the vertical scroll mode of the scroll view.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIScrollView#VerticalScrollMode)
	 */
	VerticalScrollMode: Enums["ScrollMode"];
}

interface UITextInput extends UIView {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UITextInput: unique symbol;
	/**
	 * Fires when user submitted the text
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#Submitted)
	 */
	readonly Submitted: Event<(text: string) => void>;
	/**
	 * Fires when user changed the text
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#Changed)
	 */
	readonly Changed: Event<(text: string) => void>;
	/**
	 * Fires when user focuses on this input field
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#FocusEnter)
	 */
	readonly FocusEnter: Event<() => void>;
	/**
	 * Fires when user defocused from this input field
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#FocusExit)
	 */
	readonly FocusExit: Event<() => void>;
	/**
	 * The text of the label.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#Text)
	 */
	Text: string;
	/**
	 * The color of the text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#TextColor)
	 */
	TextColor: Color;
	/**
	 * Determines how text is justified.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#JustifyText)
	 */
	JustifyText: Enums["TextHorizontalAlignment"];
	/**
	 * The font size of the label.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#FontSize)
	 */
	FontSize: number;
	/**
	 * Determines whether the text input supports multiple lines.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#IsMultiline)
	 */
	IsMultiline: boolean;
	/**
	 * The placeholder text displayed when the input is empty.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#Placeholder)
	 */
	Placeholder: string;
	/**
	 * The color of the placeholder text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#PlaceholderColor)
	 */
	PlaceholderColor: Color;
	/**
	 * The color of the text when the input is read-only.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#ReadOnlyColor)
	 */
	ReadOnlyColor: Color;
	/**
	 * Determines whether the text input is read-only.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#IsReadOnly)
	 */
	IsReadOnly: boolean;
	/**
	 * The font asset used for the text.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#FontAsset)
	 */
	FontAsset: FontAsset;
	/**
	 * Forces the local player to focus on the text input.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UITextInput#Focus)
	 */
	Focus(this: UITextInput): void;
}

interface UIVerticalLayout extends UIHVLayout {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UIVerticalLayout: unique symbol;
}

interface UIView extends UIField {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UIView: unique symbol;
	/**
	 * Determines the border color of the UI.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIView#BorderColor)
	 */
	BorderColor: Color;
	/**
	 * Determines the color of the UI.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIView#Color)
	 */
	Color: Color;
	/**
	 * Determines the width of the border of the UI.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIView#BorderWidth)
	 */
	BorderWidth: number;
	/**
	 * Determines the corner radius of the UI.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/UIView#CornerRadius)
	 */
	CornerRadius: number;
}

interface UIViewport extends UIField {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UIViewport: unique symbol;
}

interface ValueBase extends Instance {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ValueBase: unique symbol;
	/**
	 * Fires when value has been changed
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/ValueBase#Changed)
	 */
	readonly Changed: Event<() => void>;
}

interface Vector2 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Vector2: unique symbol;
	/**
	 * The X component of the vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#X)
	 */
	X: number;
	/**
	 * The Y component of the vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Y)
	 */
	Y: number;
	/**
	 * Shorthand for Vector2.New(0, -1).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Down)
	 */
	readonly Down: Vector2;
	/**
	 * Shorthand for Vector2.New(-1, 0).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Left)
	 */
	readonly Left: Vector2;
	/**
	 * Shorthand for Vector2.New(1, 1).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#One)
	 */
	readonly One: Vector2;
	/**
	 * Shorthand for Vector2.New(0, 0).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Zero)
	 */
	readonly Zero: Vector2;
	/**
	 * Shorthand for Vector2.New(1, 0).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Right)
	 */
	readonly Right: Vector2;
	/**
	 * Shorthand for Vector2.New(0, 1).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Up)
	 */
	readonly Up: Vector2;
	/**
	 * The length of the vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Magnitude)
	 */
	readonly Magnitude: number;
	/**
	 * The normalized version of the vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Normalized)
	 */
	readonly Normalized: Vector2;
	/**
	 * The squared length of the vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#SqrMagnitude)
	 */
	readonly SqrMagnitude: number;
	/**
	 * Returns a new Vector2 with the given x and y components.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#New)
	 */
	New(this: Vector2): Vector2;
	/**
	 * Returns a new Vector2 with the given x and y components.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#New)
	 */
	New(this: Vector2, d: number): Vector2;
	/**
	 * Returns a new Vector2 with the given x and y components.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#New)
	 */
	New(this: Vector2, x: number, y: number): Vector2;
	/**
	 * Returns the angle in degrees between from and to.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Angle)
	 */
	Angle(this: Vector2, from: Vector2, to: Vector2): number;
	/**
	 * Returns the cross product of lhs and rhs.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Cross)
	 */
	Cross(this: Vector2, lhs: Vector2, rhs: Vector2): Vector2;
	/**
	 * Returns the distance between a and b.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Distance)
	 */
	Distance(this: Vector2, a: Vector2, b: Vector2): number;
	/**
	 * Returns the dot product of lhs and rhs.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Dot)
	 */
	Dot(this: Vector2, lhs: Vector2, rhs: Vector2): number;
	/**
	 * Returns a new vector that is the linear interpolation between a and b by t.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Lerp)
	 */
	Lerp(this: Vector2, a: Vector2, b: Vector2, t: number): Vector2;
	/**
	 * Returns a vector that is made from the largest components of two vectors.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Max)
	 */
	Max(this: Vector2, lhs: Vector2, rhs: Vector2): Vector2;
	/**
	 * Returns a vector that is made from the smallest components of two vectors.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Min)
	 */
	Min(this: Vector2, lhs: Vector2, rhs: Vector2): Vector2;
	/**
	 * Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#MoveTowards)
	 */
	MoveTowards(this: Vector2, current: Vector2, target: Vector2, maxDistanceDelta: number): Vector2;
	/**
	 * Returns a new Vector2 that is the normalized version of the given vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Normalize)
	 */
	Normalize(this: Vector2, value: Vector2): Vector2;
	/**
	 * Returns the projection of a vector onto another vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Project)
	 */
	Project(this: Vector2, vector: Vector2, onNormal: Vector2): Vector2;
	/**
	 * Returns the reflection of a vector off the plane defined by a normal.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Reflect)
	 */
	Reflect(this: Vector2, inDirection: Vector2, inNormal: Vector2): Vector2;
	/**
	 * Spherically interpolates between two vectors.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2#Slerp)
	 */
	Slerp(this: Vector2, a: Vector2, b: Vector2, t: number): Vector2;
}

interface Vector2Value extends ValueBase {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Vector2Value: unique symbol;
	/**
	 * The value of this object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector2Value#Value)
	 */
	Value: Vector2;
}

interface Vector3 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Vector3: unique symbol;
	/**
	 * The X component of the vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#X)
	 */
	X: number;
	/**
	 * The Y component of the vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Y)
	 */
	Y: number;
	/**
	 * The Z component of the vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Z)
	 */
	Z: number;
	/**
	 * Shorthand for Vector3.New(0, 0, -1).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Forward)
	 */
	readonly Forward: Vector3;
	/**
	 * Shorthand for Vector3.New(0, 0, 1).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Back)
	 */
	readonly Back: Vector3;
	/**
	 * Shorthand for Vector3.New(0, -1, 0).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Down)
	 */
	readonly Down: Vector3;
	/**
	 * Shorthand for Vector3.New(-1, 0, 0).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Left)
	 */
	readonly Left: Vector3;
	/**
	 * Shorthand for Vector3.New(1, 1, 1).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#One)
	 */
	readonly One: Vector3;
	/**
	 * Shorthand for Vector3.New(0, 0, 0).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Zero)
	 */
	readonly Zero: Vector3;
	/**
	 * Shorthand for Vector3.New(1, 0, 0).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Right)
	 */
	readonly Right: Vector3;
	/**
	 * Shorthand for Vector3.New(0, 1, 0).
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Up)
	 */
	readonly Up: Vector3;
	/**
	 * The length of the vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Magnitude)
	 */
	readonly Magnitude: number;
	/**
	 * The normalized version of the vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Normalized)
	 */
	readonly Normalized: Vector3;
	/**
	 * The squared length of the vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#SqrMagnitude)
	 */
	readonly SqrMagnitude: number;
	/**
	 * Returns a new Vector3 with the given Vector2 components and a z component of 0.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#New)
	 */
	New(this: Vector3): Vector3;
	/**
	 * Returns a new Vector3 with the given Vector2 components and a z component of 0.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#New)
	 */
	New(this: Vector3, d: number): Vector3;
	/**
	 * Returns a new Vector3 with the given Vector2 components and a z component of 0.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#New)
	 */
	New(this: Vector3, x: number, y: number): Vector3;
	/**
	 * Returns a new Vector3 with the given Vector2 components and a z component of 0.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#New)
	 */
	New(this: Vector3, x: number, y: number, z: number): Vector3;
	/**
	 * Returns a new Vector3 with the given Vector2 components and a z component of 0.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#New)
	 */
	New(this: Vector3, v: Vector2): Vector3;
	/**
	 * Returns the angle in degrees between from and to.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Angle)
	 */
	Angle(this: Vector3, from: Vector3, to: Vector3): number;
	/**
	 * Returns the cross product of lhs and rhs.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Cross)
	 */
	Cross(this: Vector3, lhs: Vector3, rhs: Vector3): Vector3;
	/**
	 * Returns the distance between a and b.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Distance)
	 */
	Distance(this: Vector3, a: Vector3, b: Vector3): number;
	/**
	 * Returns the dot product of lhs and rhs.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Dot)
	 */
	Dot(this: Vector3, lhs: Vector3, rhs: Vector3): number;
	/**
	 * Returns a new Vector3 that is the linear interpolation between a and b by t.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Lerp)
	 */
	Lerp(this: Vector3, a: Vector3, b: Vector3, t: number): Vector3;
	/**
	 * Returns a vector that is made from the largest components of two vectors.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Max)
	 */
	Max(this: Vector3, lhs: Vector3, rhs: Vector3): Vector3;
	/**
	 * Returns a vector that is made from the smallest components of two vectors.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Min)
	 */
	Min(this: Vector3, lhs: Vector3, rhs: Vector3): Vector3;
	/**
	 * Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#MoveTowards)
	 */
	MoveTowards(this: Vector3, current: Vector3, target: Vector3, maxDistanceDelta: number): Vector3;
	/**
	 * Returns a new Vector3 that is the normalized version of the given vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Normalize)
	 */
	Normalize(this: Vector3, value: Vector3): Vector3;
	/**
	 * Returns the projection of a vector onto another vector.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Project)
	 */
	Project(this: Vector3, vector: Vector3, onNormal: Vector3): Vector3;
	/**
	 * Returns the reflection of a vector off the plane defined by a normal.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Reflect)
	 */
	Reflect(this: Vector3, inDirection: Vector3, inNormal: Vector3): Vector3;
	/**
	 * Returns the signed angle in degrees between from and to.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#SignedAngle)
	 */
	SignedAngle(this: Vector3, from: Vector3, to: Vector3, axis: Vector3): number;
	/**
	 * Spherically interpolates between two vectors.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3#Slerp)
	 */
	Slerp(this: Vector3, a: Vector3, b: Vector3, t: number): Vector3;
}

interface Vector3Value extends ValueBase {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Vector3Value: unique symbol;
	/**
	 * The value of this object.
	 * [Documentation](https://6cccc716.docs-v2-cib.pages.dev/api/types/Vector3Value#Value)
	 */
	Value: Vector3;
}
