/// <reference path="lua.d.ts" />
// Auto-generated typedefs for polytoria!
type Enums = typeof Enum;

interface EnumItem {}
interface Enum {}

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
	UseAchievementSound: boolean;
	NotifyAchievements: boolean;
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
	readonly Identifier: string;
	AddonName: string;
	AddonIcon: PTImageAsset;
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
	TargetPosition: Vector3;
	Force: number;
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
	readonly Center: Vector3;
	Size: Vector3;
	readonly Extents: Vector3;
	readonly Start: Vector3;
	End: Vector3;
	readonly Volume: number;
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
	FontPreset: Enums["BuiltInTextFontPreset"];
	FontWeight: Enums["FontWeight"];
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
	Mode: Enums["CameraMode"];
	FOV: number;
	ClipThroughWalls: boolean;
	MinDistance: number;
	MaxDistance: number;
	Distance: number;
	ScrollSensitivity: number;
	Orthographic: boolean;
	FollowLerp: boolean;
	LerpSpeed: number;
	OrthographicSize: number;
	PositionOffset: Vector3;
	RotationOffset: Vector3;
	readonly IsFirstPerson: boolean;
	CanLock: boolean;
	SensitivityMultiplier: number;
	readonly Sensitivity: number;
	HorizontalSpeed: number;
	VerticalSpeed: number;
	ScrollLerpSpeed: number;
	CtrlLocked: boolean;
	AlwaysLocked: boolean;
	Target: Dynamic;
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
	readonly OnCooldown: boolean;
	CanCapture: boolean;
	DefaultCaptureOverlay: UIField;
	SpectatorAttach: Dynamic;
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
	Animator: Animator;
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
	ChatPredicate: any;
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
	R: number;
	G: number;
	B: number;
	A: number;
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
	Brightness: number;
	Contrast: number;
	Saturation: number;
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
	readonly PointCount: number;
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
	UseUserCard: boolean;
	UseChat: boolean;
	UseHealthBar: boolean;
	UseLeaderboard: boolean;
	UseHotbar: boolean;
	UseBackpack: boolean;
	UseMenuButton: boolean;
	UseEmoteWheel: boolean;
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
	readonly ToolMode: Enums["ToolMode"];
	readonly TargetPartColor: Color;
	readonly TargetPartMaterial: Enums["PartMaterial"];
	readonly MoveSnapEnabled: boolean;
	readonly MoveSnapping: number;
	readonly UserMoveSnapping: number;
	readonly RotateSnapEnabled: boolean;
	readonly RotateSnapping: number;
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
	readonly Interface: CreatorInterface;
	readonly CurrentGame: Game;
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
	readonly Key: string;
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
	Image: ImageAsset;
	Energy: number;
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
	Position: Vector3;
	Rotation: Vector3;
	Size: Vector3;
	LocalPosition: Vector3;
	LocalRotation: Vector3;
	LocalSize: Vector3;
	Quaternion: Quaternion;
	LocalQuaternion: Quaternion;
	Locked: boolean;
	readonly Forward: Vector3;
	readonly Right: Vector3;
	readonly Up: Vector3;
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
	Color: Color;
	CastShadows: boolean;
	IsSpawn: boolean;
	UseGravity: boolean;
	Mass: number;
	Friction: number;
	Drag: number;
	AngularDrag: number;
	Bounciness: number;
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
	CurrentCamera: Camera;
	Gravity: Vector3;
	PartDestroyHeight: number;
	AutoGenerateNavMesh: boolean;
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
	Radius: number;
	Force: number;
	AffectAnchored: boolean;
	Damage: number;
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
	readonly IsLocalTest: boolean;
	readonly GameID: number;
	readonly ServerID: number;
	readonly UpTime: number;
	readonly ServerTime: number;
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
	Force: number;
	MaxRange: number;
	UseDragForce: boolean;
	PermissionMode: Enums["GrabbablePermissionMode"];
	readonly Dragger: Player;
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
	Series: ColorSeries;
	Width: number;
	Height: number;
	Fill: Enums["GradientImageFill"];
	FillFrom: Vector2;
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
	SunDiscColor: Color;
	SunDiscMultiplier: number;
	SunDiscExponent: number;
	SunHaloColor: Color;
	SunHaloExponent: number;
	SunHaloContribution: number;
	HorizonLineColor: Color;
	HorizonLineExponent: number;
	HorizonLineContribution: number;
	SkyGradientTop: Color;
	SkyGradientBottom: Color;
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
	Visible: boolean;
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
	CanvasSize: Vector2;
	Shaded: boolean;
	FaceCamera: boolean;
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
	URL: string;
	Method: Enums["HttpRequestMethod"];
	Body: string;
	Headers: any;
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
	readonly Success: boolean;
	readonly StatusCode: number;
	readonly Headers: any;
	readonly Body: string;
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
	Image: ImageAsset;
	TextureScale: Vector2;
	TextureOffset: Vector2;
	Color: Color;
	CastShadows: boolean;
	Shaded: boolean;
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
	TopImage: ImageAsset;
	BottomImage: ImageAsset;
	LeftImage: ImageAsset;
	RightImage: ImageAsset;
	FrontImage: ImageAsset;
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
	Negative: InputButtonCollection;
	Positive: InputButtonCollection;
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
	readonly Buttons: InputButtonCollection;
	IsPressed: boolean;
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
	Up: InputButtonCollection;
	Down: InputButtonCollection;
	Left: InputButtonCollection;
	Right: InputButtonCollection;
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
	KeyCode: Enums["KeyCode"];
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
	readonly IsWindowFocused: boolean;
	readonly IsTouchscreen: boolean;
	readonly IsGameFocused: boolean;
	readonly IsInputFocused: boolean;
	readonly IsGamepadConnected: boolean;
	readonly IsMenuOpened: boolean;
	CursorLocked: boolean;
	CursorVisible: boolean;
	readonly MousePosition: Vector2;
	readonly ScreenWidth: number;
	readonly ScreenHeight: number;
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
	Parent: Instance;
	EditableChildren: boolean;
	Tags: Array<string>;
	Archivable: boolean;
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
	Color: Color;
	Brightness: number;
	Specular: number;
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
	Skybox: Enums["Skybox"];
	AmbientSource: Enums["AmbientSource"];
	AmbientColor: Color;
	FogEnabled: boolean;
	FogColor: Color;
	FogStartDistance: number;
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
	Length: number;
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
	Asset: MeshAsset;
	IncludeOffset: boolean;
	CollisionType: Enums["CollisionType"];
	PlayAnimationOnStart: boolean;
	UsePartColor: boolean;
	Color: Color;
	CastShadows: boolean;
	readonly CurrentAnimation: string;
	readonly IsAnimationPlaying: boolean;
	readonly Loading: boolean;
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
	Name: string;
	Length: number;
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
	Name: string;
	readonly ClassName: string;
	readonly Shared: ScriptSharedTable;
	readonly NetworkedObjectID: string;
	readonly ObjectID: string;
	readonly ExistInNetwork: boolean;
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
	Reliable: boolean;
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
	PlacePath: string;
	MaxPlayers: number;
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
	SeatOffset: Vector3;
	Health: number;
	MaxHealth: number;
	JumpPower: number;
	WalkSpeed: number;
	UseNametag: boolean;
	NametagOffset: Vector3;
	NametagVisibleRadius: number;
	DisplayName: string;
	JumpSound: Sound;
	readonly IsSitting: boolean;
	readonly IsDead: boolean;
	readonly HoldingTool: Tool;
	readonly SittingIn: Seat;
	readonly Character: CharacterModel;
	MoveTarget: Dynamic;
	readonly OnGround: boolean;
	readonly OnCeiling: boolean;
	readonly NavDestinationDistance: number;
	readonly NavDestinationReached: boolean;
	readonly NavDestinationValid: boolean;
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
	Min: number;
	Max: number;
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
	Shape: Enums["Shape"];
	Material: Enums["PartMaterial"];
	Color: Color;
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
	Playing: boolean;
	Image: ImageAsset;
	Color: ColorSeries;
	Lifetime: NumberRange;
	Amount: number;
	Gravity: Vector3;
	VelocityDirection: Vector3;
	InitialVelocity: NumberRange;
	Spread: number;
	Flatness: number;
	Scale: NumberRange;
	HueVariation: NumberRange;
	BlendMode: Enums["BlendMode"];
	Shaded: boolean;
	EmissionShape: Enums["ParticleEmissionShape"];
	EmissionShapeScale: Vector3;
	SimulationSpace: Enums["ParticleSimulationSpace"];
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
	Anchored: boolean;
	CanCollide: boolean;
	Velocity: Vector3;
	AngularVelocity: Vector3;
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
	readonly UserID: number;
	CanMove: boolean;
	SprintSpeed: number;
	Stamina: number;
	MaxStamina: number;
	UseStamina: boolean;
	StaminaRegen: number;
	StaminaBurn: number;
	RespawnTime: number;
	UseHeadTurning: boolean;
	UseBubbleChat: boolean;
	AutoLoadAppearance: boolean;
	readonly NetworkPing: number;
	readonly IsAdmin: boolean;
	readonly IsCreator: boolean;
	ChatColor: Color;
	readonly IsLocal: boolean;
	readonly IsClimbing: boolean;
	readonly ClimbingTruss: Truss;
	readonly UserPlatform: Enums["ClientPlatform"];
	readonly Inventory: Inventory;
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
	MaxHealth: number;
	WalkSpeed: number;
	SprintSpeed: number;
	JumpPower: number;
	RespawnTime: number;
	ChatColor: Color;
	CanMove: boolean;
	StaminaBurn: number;
	UseStamina: boolean;
	StaminaEnabled: boolean;
	Stamina: number;
	MaxStamina: number;
	StaminaRegen: number;
	UseHeadTurning: boolean;
	UseBubbleChat: boolean;
	AutoLoadAppearance: boolean;
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
	readonly LocalPlayer: Player;
	PlayerCollisionEnabled: boolean;
	readonly PlayersCount: number;
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
	HeadColor: Color;
	TorsoColor: Color;
	LeftArmColor: Color;
	RightArmColor: Color;
	LeftLegColor: Color;
	RightLegColor: Color;
	FaceImage: ImageAsset;
	ShirtImage: ImageAsset;
	PantsImage: ImageAsset;
	TorsoMesh: MeshAsset;
	readonly Ragdolling: boolean;
	readonly RagdollPosition: Vector3;
	readonly RagdollRotation: Vector3;
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
	readonly UsePhotoMode: boolean;
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
	State: string;
	CoverImage: PTImageAsset;
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
	SunSize: number;
	SkyTint: Color;
	HorizonColor: Color;
	GroundColor: Color;
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
	ImageID: number;
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
	X: number;
	Y: number;
	Z: number;
	W: number;
	readonly Identity: Quaternion;
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
	Origin: Vector3;
	Direction: Vector3;
	Position: Vector3;
	Normal: Vector3;
	Distance: number;
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
	Source: string;
	IsEnabled: boolean;
	LinkedScript: FileLinkAsset;
	Compatibility: boolean;
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
	Occupant: NPC;
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
	Audio: AudioAsset;
	Volume: number;
	Pitch: number;
	Autoplay: boolean;
	Loop: boolean;
	PlayInWorld: boolean;
	Paused: boolean;
	MaxDistance: number;
	Time: number;
	readonly Playing: boolean;
	readonly Loading: boolean;
	readonly Length: number;
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
	Range: number;
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
	Text: string;
	FontSize: number;
	Color: Color;
	OutlineWidth: number;
	OutlineColor: Color;
	FaceCamera: boolean;
	HorizontalAlignment: Enums["TextHorizontalAlignment"];
	VerticalAlignment: Enums["TextVerticalAlignment"];
	FontAsset: FontAsset;
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
	Droppable: boolean;
	IconImage: ImageAsset;
	Holder: NPC;
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
	Looped: boolean;
	Parallel: boolean;
	SpeedScale: number;
	readonly IsRunning: boolean;
	readonly ElapsedTime: number;
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
	PositionOffset: Vector2;
	PositionRelative: Vector2;
	Rotation: number;
	SizeOffset: Vector2;
	SizeRelative: Vector2;
	ClipDescendants: boolean;
	PivotPoint: Vector2;
	Scale: Vector2;
	Visible: boolean;
	MaskMode: Enums["MaskMode"];
	IgnoreMouse: boolean;
	ZIndex: number;
	readonly AbsolutePosition: Vector2;
	readonly AbsoluteSize: Vector2;
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
	Spacing: number;
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
	Image: ImageAsset;
	Color: Color;
	StretchMode: Enums["ImageStretchMode"];
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
	Text: string;
	TextColor: Color;
	OutlineWidth: number;
	OutlineColor: Color;
	HorizontalAlignment: Enums["TextHorizontalAlignment"];
	VerticalAlignment: Enums["TextVerticalAlignment"];
	FontSize: number;
	UseRichText: boolean;
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
	HorizontalScrollMode: Enums["ScrollMode"];
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
	Text: string;
	TextColor: Color;
	JustifyText: Enums["TextHorizontalAlignment"];
	FontSize: number;
	IsMultiline: boolean;
	Placeholder: string;
	PlaceholderColor: Color;
	ReadOnlyColor: Color;
	IsReadOnly: boolean;
	FontAsset: FontAsset;
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
	BorderColor: Color;
	Color: Color;
	BorderWidth: number;
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
	X: number;
	Y: number;
	readonly Down: Vector2;
	readonly Left: Vector2;
	readonly One: Vector2;
	readonly Zero: Vector2;
	readonly Right: Vector2;
	readonly Up: Vector2;
	readonly Magnitude: number;
	readonly Normalized: Vector2;
	readonly SqrMagnitude: number;
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
	X: number;
	Y: number;
	Z: number;
	readonly Forward: Vector3;
	readonly Back: Vector3;
	readonly Down: Vector3;
	readonly Left: Vector3;
	readonly One: Vector3;
	readonly Zero: Vector3;
	readonly Right: Vector3;
	readonly Up: Vector3;
	readonly Magnitude: number;
	readonly Normalized: Vector3;
	readonly SqrMagnitude: number;
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
	Value: Vector3;
}
