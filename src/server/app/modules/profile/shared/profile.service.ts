// Library
import {
Injectable,
BadRequestException,
NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Internal
import { ProfileModel } from './profile.model';

@Injectable()
export class ProfileService {
private readonly profile: ProfileModel[] = [];

constructor(
@InjectRepository(ProfileModel)
private readonly profileRepository: Repository<ProfileModel>
    ) {}

    protected getId(paramId: any): number {
        const id = parseInt(paramId, 10);

        if (isNaN(id) || typeof id !== 'number') {
            throw new BadRequestException();
        }

        return id;
    }

    async create(profilePayload: ProfileModel): Promise<ProfileModel> {
        const profile = new ProfileModel();
        profile.githubId = profilePayload.githubId;
        profile.lastTokenWeb = profilePayload.lastTokenWeb;
        profile.lastTokenMobile = profilePayload.lastTokenMobile;
        profile.name = profilePayload.name;
        profile.email = profilePayload.email;
        profile.avatarUrl = profilePayload.avatarUrl;
        profile.bio = profilePayload.bio;
        profile.location = profilePayload.location;
        profile.createdAt = profilePayload.createdAt;
        profile.updatedAt = profilePayload.updatedAt;
        
        // Check if user exists
        const doesUserExist  = await this.profileRepository.find({ githubId: profilePayload.githubId });
        let updatedUser = doesUserExist && doesUserExist.length && doesUserExist[0];
        if (doesUserExist && doesUserExist.length) {
            delete profilePayload.id;
            await this.update(doesUserExist[0].id, profilePayload);
            updatedUser = await this.findOneById(doesUserExist[0].id);
        }
        return (updatedUser) ? updatedUser : await this.profileRepository.save(profile);
    }

    async findAll(): Promise<ProfileModel[]> {
        return await this.profileRepository.find({
            cache: true,
            order: { id: 'ASC' }
        });
    }

    async findOneById(id: number): Promise<ProfileModel> {
        return await this.profileRepository.findOne(id, { cache: true });
    }

    async update(paramId: any, entity: ProfileModel): Promise<ProfileModel> {
        await this.profileRepository.update(paramId, entity);
        return await this.findOneById(paramId);
    }

    async updateToken(githubId: any, lastToken: string, newToken: string): Promise<boolean> {
        const doesUserExist = await this.profileRepository.find({ githubId, lastTokenWeb: lastToken });
        if (doesUserExist && doesUserExist.length && doesUserExist[0] && doesUserExist[0].id) {
            const updateUserPayload = {
                lastTokenWeb: newToken,
                updatedAt: new Date(),
            };
            await this.profileRepository.update(doesUserExist[0].id, updateUserPayload);
            return true;
        } else {
            return false;
        }
    }

    async delete(paramId: any): Promise<void> {
        const id = this.getId(paramId);
        try {
            await this.profileRepository.delete(id);
        } catch (err) {
            throw new NotFoundException();
        }
    }
}