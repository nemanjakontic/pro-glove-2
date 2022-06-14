import * as $protobuf from "protobufjs";
/** Properties of a Configuration. */
export interface IConfiguration {

    /** Configuration timeout */
    timeout?: (number|null);

    /** Configuration deviceName */
    deviceName?: (string|null);

    /** Configuration audibleFeedback */
    audibleFeedback?: (Configuration.AudibleFeedback|null);

    /** Configuration visibleFeedback */
    visibleFeedback?: (Configuration.VisibleFeedback|null);
}

/** Represents a Configuration. */
export class Configuration implements IConfiguration {

    /**
     * Constructs a new Configuration.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConfiguration);

    /** Configuration timeout. */
    public timeout: number;

    /** Configuration deviceName. */
    public deviceName: string;

    /** Configuration audibleFeedback. */
    public audibleFeedback?: (Configuration.AudibleFeedback|null);

    /** Configuration visibleFeedback. */
    public visibleFeedback?: (Configuration.VisibleFeedback|null);

    /** Configuration feedback. */
    public feedback?: ("audibleFeedback"|"visibleFeedback");

    /**
     * Creates a new Configuration instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Configuration instance
     */
    public static create(properties?: IConfiguration): Configuration;

    /**
     * Encodes the specified Configuration message. Does not implicitly {@link Configuration.verify|verify} messages.
     * @param message Configuration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Configuration message, length delimited. Does not implicitly {@link Configuration.verify|verify} messages.
     * @param message Configuration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Configuration message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Configuration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Configuration;

    /**
     * Decodes a Configuration message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Configuration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Configuration;

    /**
     * Verifies a Configuration message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Configuration message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Configuration
     */
    public static fromObject(object: { [k: string]: any }): Configuration;

    /**
     * Creates a plain object from a Configuration message. Also converts values to other types if specified.
     * @param message Configuration
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Configuration, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Configuration to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Configuration {

    /** AudibleFeedback enum. */
    enum AudibleFeedback {
        BEEP = 0,
        BUUP_BUUP = 1,
        BEEP_BUUP = 2,
        BEEP_BEEP = 3
    }

    /** VisibleFeedback enum. */
    enum VisibleFeedback {
        GREEN = 0,
        RED = 1,
        BLUE = 2
    }
}
