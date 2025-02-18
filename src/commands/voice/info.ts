import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../impl';

class VoiceInfo implements Command {
	get data() {
		return new SlashCommandBuilder()
			.setName('voice-info')
			.setDescription(
				'Visualiza informações sobre o canal de voz atual.',
			);
	}

	async execute(interaction: CommandInteraction) {}
}

export const voiceInfo = new VoiceInfo();
