// Library
import {
Injectable,
BadRequestException,
NotFoundException
} from '@nestjs/common';
import { map } from 'lodash';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not, Like, In, Any } from 'typeorm';

// Internal
import { GroupModel, Group } from './group.model'; 
import { GroupMemberModel, GroupMember } from '../../group-member/shared/group-member.model';

// Service
import { ProfileService } from '../../profile/shared/profile.service';

@Injectable()
export class GroupService {
	private readonly group: GroupModel[] = [];
	private readonly groupMember: GroupMemberModel[] = [];

	constructor(
		@InjectRepository(GroupModel)
		private readonly groupRepository: Repository<GroupModel>,
		@InjectRepository(GroupMemberModel)
		private readonly groupMemberRepository: Repository<GroupMemberModel>,
		private readonly profileService: ProfileService,
	) {}

	protected getId(paramId: any): number {
		const id = parseInt(paramId, 10);

		if (isNaN(id) || typeof id !== 'number') {
			throw new BadRequestException();
		}

		return id;
	}

	async create(groupPayload: Group): Promise<GroupModel> {
		let existingGroup: any = false;
		let groupObj: any = false;
		if (groupPayload.groupType === 'personal') {
			const doesGroupExist = await this.groupRepository.find({
				memberId: groupPayload.memberId,
				ownerId: groupPayload.ownerId,
			});
			const doesGroupExist1 = await this.groupRepository.find({
				memberId: groupPayload.ownerId,
				ownerId: groupPayload.memberId,
			});
			existingGroup = doesGroupExist && doesGroupExist.length && doesGroupExist[0] || 
							doesGroupExist1 && doesGroupExist1.length && doesGroupExist1[0];
		}
		if (!existingGroup) {
			const group = new GroupModel();
			group.ownerId = groupPayload.ownerId;
			group.memberId = (groupPayload.groupType === 'personal') ? groupPayload.memberId : groupPayload.ownerId;
			group.groupImage = groupPayload.groupImage;
			group.groupType = groupPayload.groupType;
			group.accessType = groupPayload.accessType;
			group.groupName = groupPayload.groupName;
			group.date = groupPayload.date;
			group.groupDescription = groupPayload.groupDescription;
			groupObj = await this.groupRepository.save(group);
		}

		if (groupPayload.groupType === 'group') {
			// Add members
			groupPayload.groupMembers.map(async (val) => {
				const GroupMember = new GroupMemberModel();
				// -- Autogenerated Model Service Definition --
				GroupMember.memberId = val.memberId;
				GroupMember.groupId = groupObj.id;
				GroupMember.date = groupPayload.date;
				await this.groupMemberRepository.save(GroupMember);
			});
		}

		return (existingGroup) ? existingGroup : groupObj;
	}

	async findAll(filters: any): Promise<GroupModel[]> {
		const params: any = {
			where: {},
			cache: filters.cache || true,
			order: { id: 'ASC' }
		};

		if (filters.where) {
			params.where = { ...filters.where };
		}

		if (filters.not) {
			map(filters.not, (val, key) => {
				params['where'][key] = Not(val);
			});
		}

		if (filters.like) {
			map(filters.like, (val, key) => {
				params['where'][key] = Like(val);
			});
		}

		if (filters.in) {
			map(filters.in, (val, key) => {
				params['where'][key] = In(val);
			});
		}

		if (filters.any) {
			map(filters.any, (val, key) => {
				params['where'][key] = Any(val);
			});
		}

		if (filters.order) {
			params.order = { ...filters.order };
		}

		if (filters.skip) {
			params.skip = filters.skip;
		}

		if (filters.take) {
			params.take = filters.take;
		}
		return await this.groupRepository.find(params);
	}

	async findOneById(id: number): Promise<GroupModel> {
		return await this.groupRepository.findOne(id, { cache: true });
	}

	async update(paramId: any, entity: Group): Promise<GroupModel> {
		await this.groupRepository.update(paramId, entity);
		return await this.findOneById(paramId);
	}

	async createFirstGroup(): Promise<GroupModel> {
		let groupObj: any = false;
		const firstProfile = await this.profileService.createFirstProfile();
		const doesGroupExist = await this.groupRepository.find({
			ownerId: firstProfile.githubUid,
			memberId: firstProfile.githubUid
		});

		const existingGroup = doesGroupExist && doesGroupExist.length && doesGroupExist[0];

		if (!existingGroup) {
			const group: any = new GroupModel();
			group.ownerId = firstProfile.githubUid;
			group.memberId = firstProfile.githubUid;
			group.groupImage = 'https://media.istockphoto.com/vectors/group-of-people-vector-id945386974?k=6&m=945386974&s=612x612&w=0&h=e97NHN3i78M6-fd-LsE6oZadGP3VRU6KoFNzkS6JPr0=';
			group.groupType = 'group';
			group.accessType = 'public';
			group.groupName = 'General';
			group.date = new Date();
			group.groupDescription = 'General Group';
			groupObj = await this.groupRepository.save(group);
		}

		return (existingGroup) ? existingGroup : groupObj;
	}

	async delete(paramId: any): Promise<void> {
		const id = this.getId(paramId);
		try {
			await this.groupRepository.delete(id);
		} catch (err) {
			throw new NotFoundException();
		}
	}
}